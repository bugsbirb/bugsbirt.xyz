"use client"
import Nav from "@/components/navbar";

export default function Socials() {
    const socials = [
        { 
            name: "Twitter", 
            icon: "/twitter.svg", 
            link: "https://twitter.com/bugsbirt",
            description: "Follow me on Twitter bc yes"
        },
        { 
            name: "Ko-Fi", 
            icon: "/ko-fi.svg", 
            link: "https://ko-fi.com/bugsbirt",
            description: "Support me on Ko-Fi!"
        },
        { 
            name: "Discord", 
            icon: "/discord.svg", 
            link: "https://discord.com/users/795743076520820776",
            description: "View my discord profile"
        },
        {
            name : "Github",
            icon: "/github.svg",
            link: "https://github.com/bugsbirt",
            description: "I like working on projects"
        }
    ];

    return (
        <div className="overflow-auto bg-gradient-to-br from-black to-indigo-800 min-h-screen">
            <Nav />
            <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl h-full" /> {/* POV: Me being lazy and not fxing css problems */}

            <div className="overflow-auto flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
            
                {socials.map((social) => (
                    <a 
                        key={social.name} 
                        href={social.link} 
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