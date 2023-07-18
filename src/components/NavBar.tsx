import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ig from "@public/ig.svg";
import Fb from "@public/fb.svg";
import Twt from "@public/twt.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = ({ theme }: { theme?: string }) => {
  const links = [
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
      <li key={result.id} className="flex w-max h-7 align-middle">
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

  return (
    <nav className="flex">
      <ThemeSwitcher theme={theme} />
      <ul className="flex items-center ml-auto w-full justify-end">{links}</ul>
    </nav>
  );
};

export default NavBar;
