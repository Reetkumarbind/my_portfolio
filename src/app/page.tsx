import React from "react";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import PersonalDetails from "@/components/PersonalDetails";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Skills />
        <Experience />
        <Education />
        <Hobbies />
        <PersonalDetails />
      </main>
    </div>
  );
};

export default Home;
