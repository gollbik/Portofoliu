import React from "react";

import Image from "next/image";
import Link from "next/link";
import Ig from "@public/ig.svg";
import Fb from "@public/fb.svg";
import Twt from "@public/twt.svg";
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
  ].map(function (result) {
    return (
      <li key={result.id} className="flex w-max h-7 align-middle ">
        {result.name}
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
      a: "/about",
      name: "About",
    },
    {
      id: "TechStack",
      a: "/tech-stack",
      name: "Tech Stack",
    },
    {
      id: "Projects",
      a: "/projects",
      name: "Projects",
    },
    {
      id: "Contact",
      a: "/contact",
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

  const media = [
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
  ].map(function (rez) {
    return (
      <li key={rez.id} className="flex w-max h-7 align-middle ">
        <Link
          href={rez.a}
          prefetch
          className={`rounded align-middle  text-lg ${
            rez?.a ? "mr-20" : "mr-8"
          }`}
        >
          <Image
            src={rez.img}
            alt="icon"
            width={30}
            height={30}
            className="min-w-[30px] min-h-[30px] fill-white"
          />
        </Link>
      </li>
    );
  });

  return (
    <footer className="footer p-10 bg-base-300 text-base-content sm:mt-64 mt-28">
      <div>
        <span className="footer-title">Menu</span>
        {secondaryLinks}
      </div>
      <div>
        <span className="footer-title">Contacts</span>
        {links}
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">{media}</div>
      </div>
    </footer>
  );
};
export default Footer;
