"use client";
import '../app/globals.css';
import Navbar from "../components/nav";

export default function Projects() {
    return (
        <div className="bg-gray-900 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center h-full flex-wrap">
                <div className="w-full max-w-md bg-grey-700 border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16 mx-4">

                    <div className="flex flex-col items-center pb-10 pt-6">
                        <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/astrobirb.png" alt="Bonnie image"/>
                        <h5 className="mb-2 text-2xl font-medium text-white dark:text-white">Astro Birb</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400">A nice staff management</span>
                        <div className="flex mt-6">
                            <a href="https://discord.gg/birb" className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join</a>
                            <a href="https://astrobirb.dev" className="py-3 px-6 ml-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Website</a>
                        </div>
                    </div>

                </div>

                <div className="w-full max-w-md bg-grey-700 border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16 mx-4">

                    <div className="flex flex-col items-center pb-10 pt-6">
                        <img className="w-32 h-32 mb-4 rounded-full shadow-lg" src="/birbmoney.png" alt="Bonnie image"/>
                        <h5 className="mb-2 text-2xl font-medium text-white dark:text-white">Bugsy's Commissions</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400">Sometimes I like to sell bot stuff</span>
                        <div className="flex mt-6">
                            <a href="https://discord.gg/V8UrYsX9u6" className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}