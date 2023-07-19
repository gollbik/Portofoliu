import Footer from "@/components/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="mb-96 sm:mt-56 mt-28 ">
        <p className="sm:text-6xl md:text-4xl lg:text-5xl text-2xl text-center">
          <strong className="text-[rgb(125,96,208)]">
            For any questions please contact me:
          </strong>
        </p>
        <p className="sm:text-5xl md:text-3xl lg:text-4xl text-xl mt-10  text-center">
          golbanalexandru2005@gmail.com
        </p>
        <p className="sm:text-5xl md:text-3xl lg:text-4xl first-letter text-xl mt-10 mb-32 text-center">
          079204231
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
