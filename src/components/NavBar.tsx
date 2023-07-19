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
      <li
        key={result.id}
        className={`h-7 align-middle justify-end flex ${
          ["fb", "tl", "ig"].includes(result.id) ? "hidden xl:flex" : ""
        } `}
      >
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
              className="min-w-[30px] min-h-[30px] fill-white hidden lg:block"
            />
          )}
        </Link>
      </li>
    );
  });

  return (
    <nav className="flex w-full ">
      <div className="hidden lg:block">
        <ThemeSwitcher theme={theme} />
      </div>
      <div className="navbar flex lg:hidden bg-base-100">
        <div className="navbar-start flex justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {links}
              <div className="divider"></div>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case sm:text-3xl text-2xl">RAWR</a>
        </div>
        <div className="navbar-end"></div>
      </div>
      <ul className="hidden lg:flex items-start ml-auto w-full justify-between lg:justify-end">
        {links}
      </ul>
    </nav>
  );
};

export default NavBar;
