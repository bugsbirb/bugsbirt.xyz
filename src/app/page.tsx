"use client"
import React from "react";
import { motion } from "framer-motion";

import Nav from "@/components/navbar";


const Home = () => {


  const languages = [
    { name: "Python", icon: "/python.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
  ];
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-indigo-800">
      <Nav />
      <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl h-full">

      </div >
      <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl h-full">
        <section className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
              👋 hi am bugsbirt
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              I like creating things like websites and bots and whatever
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/projects"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-indigo-900"
              >
                View Projects
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://ko-fi.com/bugsbirt"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.06 1.93C7.17 1.92 5.33 3.74 6.17 6H3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h9V8h2v3h9a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2h-3.17C19 2.73 14.6.42 12.57 3.24L12 4l-.57-.78c-.63-.89-1.5-1.28-2.37-1.29M9 4c.89 0 1.34 1.08.71 1.71S8 5.89 8 5a1 1 0 0 1 1-1m6 0c.89 0 1.34 1.08.71 1.71S14 5.89 14 5a1 1 0 0 1 1-1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v8h-2v-8z"
                  ></path>
                </svg>
                Donate
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="glassy rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  className="glassy rounded-lg overflow-hidden flex items-center justify-center w-full h-full p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={language.icon}
                    alt={language.name}
                    className="w-20 h-20"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;