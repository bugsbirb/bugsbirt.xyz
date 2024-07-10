import React from "react";
import Navbar from "../components/nav";
import '../app/globals.css'; 
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <img
            src="/bugsbirt.png"
            alt="bugs"
            className="w-64 h-64 mb-10 rounded-full"
          />
          <section className="text-center">
            <h1 className="text-8xl font-bold text-white">
              bugsbirt
            </h1>
            <p className="mt-6 text-3xl text-gray-300">
              I own an army of birds
            </p>
            <div className="mt-10 flex space-x-6 justify-center font-bold">
              <a
                href="/projects"
              >
                <button className="px-10 py-5 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors">
                  Projects
                </button>
              </a>
              <a
                href="https://ko-fi.com/bugsbirt"

              >
                <button className="px-10 py-5 bg-transparent border border-white text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
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