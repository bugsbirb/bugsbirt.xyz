"use client";
import Nav from "@/components/navbar";
import { useState, useEffect } from "react";

export default function GuildLookup() {
  const [guildId, setGuildId] = useState("");
  const [guildData, setGuildData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!guildId) return;

      setIsLoading(true);
      setError(null);

      try {
        let guildResponse = await fetch(`/api/discord/guild/${guildId}`);
        if (!guildResponse.ok) {
          throw new Error("Failed to fetch guild data from primary endpoint");
        }
        let result = await guildResponse.json();

        let guild = result.discoveryData?.guild || result.widgetData || result.clanData;

        if (result.widgetData?.instant_invite) {
          const inviteCode = result.widgetData?.instant_invite?.split("/").pop();
          if (inviteCode) {
            const inviteResponse = await fetch(`https://discord.com/api/v10/invites/${inviteCode}`);
            if (!inviteResponse.ok) {
              throw new Error("Failed to fetch guild data from invite endpoint");
            }
            const inviteResult = await inviteResponse.json();
            guild = inviteResult.guild;
          } else {
            throw new Error("Guild data is not available");
          }
        }

        setGuildData({
          id: guild.id,
          name: guild.name,
          icon: guild.icon,
          approximate_member_count: guild.approximate_member_count,
          approximate_presence_count: guild.approximate_presence_count,
          description: guild.description,
          features: guild.features
        });

      } catch (error: any) {
        console.error("Error fetching guild data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [guildId]);

  const getIconUrl = (guildId: string, iconHash: string) => {
    return `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png`;
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuildId(e.currentTarget.guildId.value);
  };

  return (
    <div className="overflow-auto bg-gradient-to-br from-black to-indigo-800 min-h-screen">
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-3 px-4">
        <div className="glassy bg-gray-800 p-4 rounded-lg shadow-md text-white space-y-4 max-w-xl">
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <input
              type="text"
              name="guildId"
              placeholder="Guild ID"
              value={guildId}
              onChange={(e) => setGuildId(e.target.value)}
              className="glassy w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className={`glassy bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {guildData && (
          <div className="glassy bg-indigo-500 p-6 rounded-lg shadow-md text-white space-y-4 max-w-xl">
            <div className="flex items-center space-x-4">
              {guildData.icon && (
                <img
                  src={getIconUrl(guildData.id, guildData.icon)}
                  alt="Guild Icon"
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold">{guildData.name}</h2>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-1">
                <span className="bg-green-500 rounded-full h-4 w-4"></span>
                <span className="text-gray-200">{guildData.approximate_member_count}</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="bg-gray-700 rounded-full h-4 w-4"></span>
                <span className="text-gray-200">{guildData.approximate_presence_count}</span>
              </span>
            </div>
            <p className="text-gray-300">{guildData.description}</p>
            <p className="text-gray-300">ID: {guildData.id}</p>
            <div className="flex flex-wrap items-center space-x-2">
              {guildData.features?.map((feature: any) => (
                <span key={feature} className="bg-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-300">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
