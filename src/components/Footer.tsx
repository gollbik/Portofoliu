import React from "react";
import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Git from "@public/git.svg";
import Ig from "@public/ig.svg";
import Fb from "@public/fb.svg";
import Twt from "@public/twt.svg";
import Logo2 from "@public/logo2.svg";
const Footer = () => {
  const links = [
    {
      id: "Phone",
      a: "/",
      name: "079204231",
    },
    {
      id: "Email",
      a: "/",
      name: "golbanalexandru2005@gmail.com",
    },
    {
      id: "ig",
      a: "https://www.instagram.com/gollbik/",
      img: Ig,
    },
    {
      id: "fb",
      a: "https://www.facebook.com/alexandrugolban2005/",
      img: Fb,
    },
    {
      id: "tl",
      a: "https://twitter.com/RAWR11798270038",
      img: Twt,
    },
  ].map(function (result) {
    return (
      <li key={result.id} className="flex w-max h-7 align-middle ">
        <Link
          href={result.a}
          prefetch
          className={`rounded align-middle  text-lg ${
            result?.name ? "mr-20" : "mr-8"
          }`}
        >
          {result?.name && <p className="">{result.name}</p>}
          {result.img && (
            <Image
              src={result.img}
              alt="icon"
              width={30}
              height={30}
              className="min-w-[30px] min-h-[30px] fill-white"
            />
          )}
        </Link>
      </li>
    );
  });

  const secondaryLinks = [
    {
      id: "Home",
      a: "/",
      name: "Home",
    },
    {
      id: "About",
      a: "/",
      name: "About",
    },
    {
      id: "TechStack",
      a: "/tech-stack",
      name: "Tech Stack",
    },
    {
      id: "Projects",
      a: "/",
      name: "Projects",
    },
    {
      id: "Contact",
      a: "/",
      name: "Contact",
    },
  ].map(function (result) {
    return (
      <li key={result.id} className="flex w-max h-7 align-middle">
        <Link
          href={result.a}
          prefetch
          className={`rounded align-middle  text-lg ${
            result?.name ? "mr-20" : "mr-8"
          }`}
        >
          {result?.name && <p className="">{result.name}</p>}
        </Link>
      </li>
    );
  });

  return (
    <footer className="footer flex flex-col mt-56 ">
      <div className="flex items-center w-full justify-end -mb-10">
        <ul className="flex items-center w-full justify-end">{links}</ul>
      </div>
      <div className="divider min-w-full bg-[rgb(204,37,180)]  h-[2px]"></div>
      <ul className="flex items-start w-full justify-start -mt-5 mb-10">
        {secondaryLinks}
        <p className="flex justify-center ml-auto">
          Designed and built by Alex with Love & Coffee
        </p>
      </ul>
    </footer>
  );
};
export default Footer;
