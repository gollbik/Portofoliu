import React from "react";
import Menos from "@/components/Menos";
import Footer from "@/components/Footer";

const TechStackPage = () => {
  return (
    <div className="sm:mb-32 mb-5 sm:mt-56 mt-20 ml-5 ">
      <p className="sm:text-6xl text-2xl">
        <strong className="text-[rgb(125,96,208)]">My Tech Stack</strong>
      </p>
      <p className="sm:text-2xl text-lg mt-10 sm:mb-32 mb-20 ">
        Technologies I’ve been working with recently
      </p>

      <Menos />
    </div>
  );
};

export default TechStackPage;
