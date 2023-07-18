import About from "@/components/About";
import Footer from "@/components/Footer";
import React from "react";

const aboutPage = () => {
  return (
    <div className="mt-32 ">
      <p className="sm:text-5xl text-2xl text-[rgb(125,96,208)] mx-5 sm:mx-0">
        About me
      </p>
      <p className="max-w-4xl mt-10 sm:text-xl text-md mx-5 sm:mx-0">
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </p>
      <About />
      <Footer />
    </div>
  );
};

export default aboutPage;
