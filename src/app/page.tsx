import React from "react";
import Navbar from "../components/nav";
import '../app/globals.css'; 

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src="/bugsbirt.png"
            alt="bugs"
            className="w-48 h-48 sm:w-64 sm:h-64 mb-4 sm:mb-10 rounded-full"
          />
          <section>
            <h1 className="text-5xl sm:text-8xl font-bold text-white">
              bugsbirt
            </h1>
            <p className="mt-4 sm:mt-6 text-xl sm:text-3xl text-gray-300">
              I own an army of birds
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center font-bold">
              <a
                href="/projects"
                className="cursor-pointer"
              >
                <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors mb-4 sm:mb-0">
                  Projects
                </button>
              </a>
              <a
                href="https://ko-fi.com/bugsbirt"
                className="cursor-pointer sm:ml-4"
              >
                <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-white text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                  Donate
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}