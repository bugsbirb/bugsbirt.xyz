"use client";
import '../app/globals.css';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
};



export default function Projects() {
    const router = useRouter();


    return (
        <div className="overflow-auto bg-gradient-to-br from-black to-indigo-800 min-h-screen">
            <div className="bottompadding relative mt-2 sm:mt-6 top-0 left-0 right-0 px-4  sm:py-0">
                <a className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 glossy rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-500" onClick={() => router.push('/')}>
                    <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Go Back
                </a>
            </div>
            <div className="flex items-center justify-center h-full flex-wrap">
                <motion.div
                    className="glassy w-full max-w-md bg-grey-700 border rounded-lg shadow mt-16 mx-2"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center pb-10 pt-6">
                        <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/astrobirb.gif" alt="Astro Birb"/>
                        <h5 className="mb-2 text-2xl font-medium text-white">Astro Birb</h5>
                        <span className="text-lg text-gray-500">A nice staff management</span>
                        <div className="flex mt-6">
                            <a href="https://discord.gg/birb" className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Join</a>
                            <a href="https://astrobirb.dev" className="py-3 px-6 ml-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Website</a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    
                    className="glassy w-full max-w-md bg-grey-700 border rounded-lg shadow mt-16 mx-2"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center pb-10 pt-6">
                        <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/birbmoney.png" alt="Bugsy's Commissions"/>
                        <h5 className="mb-2 text-2xl font-medium text-white">Bugsy's Commissions</h5>
                        <span className="text-lg text-gray-500">Sometimes I like to sell bot stuff</span>
                        <div className="flex mt-6">
                            <a href="https://discord.gg/V8UrYsX9u6" className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Join</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}