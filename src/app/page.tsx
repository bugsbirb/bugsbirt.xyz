'use client';
import React from "react";
import { motion } from "framer-motion";
import '../app/globals.css';
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <main className=" flex flex-col min-h-screen bg-gradient-to-br from-black to-indigo-800">
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="/bugsbirt.png"
            alt="bugs"
            className="w-48 h-48 sm:w-64 sm:h-64 mb-4 sm:mb-10 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <section>
            <motion.h1
              className="text-5xl sm:text-8xl font-bold text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              bugsbirt
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 text-xl sm:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              I own an army of birds
            </motion.p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center font-bold">
              <motion.a
                className="cursor-pointer"
                onClick={() => router.push('/projects')}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              >
                <button className="animated-gradient w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors mb-4 sm:mb-0">
                  Projects
                </button>
              </motion.a>
              <motion.a
                href="https://ko-fi.com/bugsbirt"
                className="cursor-pointer sm:ml-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              >
                <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-white text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                  Donate
                </button>
              </motion.a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}