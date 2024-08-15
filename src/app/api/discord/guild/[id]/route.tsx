import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const guildId = pathname.split("/")[4];

  if (!guildId) {
    return NextResponse.json(
      { error: "Guild ID is required" },
      { status: 400 }
    );
  }

  try {
    // Discovery data
    const discoveryUrl = `https://discord.com/api/v10/discovery/${guildId}`;
    const discoveryResponse = await fetch(discoveryUrl);
    const discoveryData = discoveryResponse.ok
      ? await discoveryResponse.json()
      : null;

    // Clan data
    const clanUrl = `https://discord.com/api/v10/discovery/${guildId}/clan`;
    const clanResponse = await fetch(clanUrl, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    });
    const clanData = clanResponse.ok ? await clanResponse.json() : null;

    // Widget data
    const widgetUrl = `https://discord.com/api/v10/guilds/${guildId}/widget.json`;
    const widgetResponse = await fetch(widgetUrl);
    const widgetData = widgetResponse.ok ? await widgetResponse.json() : null;

    return NextResponse.json({
      widgetData,
      hasWidget: widgetData?.id || false,
      discoveryData,
      clanData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
