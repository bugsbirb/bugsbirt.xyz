"use client"
import Nav from "@/components/navbar";
import Projectss from "@/components/projects";

export default function Projects() {

    return (
        <div className="overflow-auto bg-gradient-to-br from-black to-indigo-800 min-h-screen">
            <Nav />
            <div className="px-4 sm:px-8 py-16 mx-auto max-w-screen-xl lg:py-20 lg:px-12"> 
                <Projectss />  
            </div>
        </div>
    );
}
