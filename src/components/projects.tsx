
import { motion } from "framer-motion"
const cardanim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
};
export default function Projects() {
    return(
        <div className="flex items-center justify-center h-full flex-wrap">
                    <motion.div
                        className="glassy w-full max-w-md bg-grey-700 border rounded-lg shadow mt-8 sm:mt-16 mx-2 mb-4 sm:mb-0"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardanim}
                    >
                        <div className="flex flex-col items-center pb-10 pt-6 relative">
                            <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/astrobirb.gif" alt="Astro Birb"/>
                            <h5 className="mb-2 text-xl font-medium text-white">Astro Birb</h5>
                            <span className="text-lg text-gray-200">A nice staff management bot</span>
                            <div className="flex mt-4 justify-center sm:justify-start"> 
                                <a href="https://discord.gg/birb" className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300">Join</a>
                                <a href="https://astrobirb.dev" className="py-2 px-4 ml-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Website</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="glassy w-full max-w-md bg-grey-700 border rounded-lg shadow mt-8 sm:mt-16 mx-2 mb-4 sm:mb-0"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardanim}
                    >
                        <div className="flex flex-col items-center pb-10 pt-6">
                            <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/townlander.png" alt="Bugsy's Commissions"/>
                            <h5 className="mb-2 text-xl font-medium text-white">Townlander</h5>
                            <span className="text-lg text-gray-200">A cool Town building RPG</span>
                            <div className="flex mt-4 justify-center sm:justify-start"> 
                                <a href="https://discord.gg/JsMaAh7CnA" className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300">Join</a>
                                <a href="https://discord.com/oauth2/authorize?client_id=1266108747260891167" className="py-2 px-4 ml-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Invite</a>
                            </div>
                        </div>
                    </motion.div>                     
        </div>
    )

}
