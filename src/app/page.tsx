"use client"
import React from "react";
import Languages from "@/components/languages";
import Nav from "@/components/navbar";
import Landing from "@/components/landing";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-indigo-800">
      <Nav />
      <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl h-full">
      </div >
      <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl h-full">
        <Landing />
        <section className="py-8 px-4 mx-auto max-w-screen-xl">
          <Languages />
        </section>
      </div>
    </main>
  );
};

export default Home;