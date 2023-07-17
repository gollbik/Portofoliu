import React from "react";
import Logo from "@public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

import Blue from "@public/blue.svg";
import Orange from "@public/orange.svg";
import Java from "@public/java.svg";
import Reac from "@public/reac.svg";
import Vector from "@public/vector.svg";
import Boot from "@public/boot.svg";
import Taill from "@public/tail.svg";
import Saas from "@public/saas.svg";
import Orange2 from "@public/orange2.svg";
import Green from "@public/green.svg";
import Visual from "@public/vs.svg";
import Git2 from "@public/git2.svg";

const Menos = () => {
  const links = [
    {
      id: "Orange",
      a: "/",
      img: Orange,
    },
    {
      id: "Blue",
      a: "/",
      img: Blue,
    },
    {
      id: "Java",
      a: "/tech-stack",
      img: Java,
    },
    {
      id: "Reac",
      a: "/",
      img: Reac,
    },
    {
      id: "Vector",
      a: "/",
      img: Vector,
    },
    {
      id: "Boot",
      a: "/",
      img: Boot,
    },
    {
      id: "Tail",
      a: "/",
      img: Taill,
    },
    {
      id: "Saas",
      a: "/",
      img: Saas,
    },
    {
      id: "Orange2",
      a: "/",
      img: Orange2,
    },
    {
      id: "Green",
      a: "/",
      img: Green,
    },
    {
      id: "Vs",
      a: "/",
      img: Visual,
    },
    {
      id: "Git",
      a: "/",
      img: Git2,
    },
  ].map(function (result) {
    return (
      <li key={result.id} className="basis-1/12 align-middle">
        <Image
          src={result.img}
          alt="icon"
          width={120}
          height={120}
          className="min-w-[120px] min-h-[120px] contrast-75"
        />
      </li>
    );
  });

  return (
    <div id="icons" className="mt-28 space-y-8 justify-center">
      <ul className="flex flex-wrap flex-grow gap-x-24 gap-y-40 w-full">
        {links}
      </ul>
    </div>
  );
};

export default Menos;
