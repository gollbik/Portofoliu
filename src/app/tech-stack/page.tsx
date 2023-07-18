import React from "react";
import Menos from "@/components/Menos";
import Footer from "@/components/Footer";

const TechStackPage = () => {
  return (
    <div className="mb-32 mt-56 ">
      <p className="text-6xl">
        <strong className="text-[rgb(125,96,208)]">My Tech Stack</strong>
      </p>
      <p className="text-2xl mt-10 mb-32">
        Technologies I’ve been working with recently
      </p>

      <Menos />
    </div>
  );
};

export default TechStackPage;
