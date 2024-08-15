"use client"
import Nav from "@/components/navbar";
import { useRouter } from "next/navigation";
export default function Socials() {
    const socials = [
        { 
            name: "Guild Lookup", 
            icon: "/server.svg", 
            link: "/tools/lookup-guild",
            description: "Search for guilds by id"
        },
        // { 
        //     name: "User Lookup", 
        //     icon: "/user.svg", 
        //     link: "/tools/lookup-user",
        //     description: "Search for users by id"
        // },

    ];
    const router = useRouter();
    const push = (page: any) => {
        router.push(page);
      };

    return (
        <div className="hi overflow-auto bg-gradient-to-br from-black to-indigo-800 min-h-screen">
            <Nav />
            
            <div className=" sm:overflow-auto flex flex-col items-center justify-center min-h-screen space-y-3 px-4">
            
                {socials.map((social) => (
                    <a 
                        key={social.name} 
                        onClick={() => push(social.link)}
                        className="glassy p-4 w-full max-w-screen-xl flex items-center rounded-lg transition transform hover:scale-105 text-center md:max-w-3xl"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div className="glassy p-3 rounded-full mr-4">
                            <img src={social.icon} alt={`${social.name} icon`} className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-white text-xl font-semibold mb-2">{social.name}</span>
                            <p className="text-white">{social.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}