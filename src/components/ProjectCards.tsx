import React from "react";
import Git from "@public/git2.svg";
import Link from "@public/link.svg";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    image: "/preview-1.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
  {
    id: 2,
    image: "/preview-2.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
  {
    id: 3,
    image: "/preview-3.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
  {
    id: 4,
    image: "/preview-4.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
  {
    id: 5,
    image: "/preview-5.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
  {
    id: 6,
    image: "/preview-6.jpg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech: "Tech stack : HTML , JavaScript, SASS, React",
    link: Link,
    preview: "aaa",
    prev: "Live preview",
    git: Git,
    view: "aaa",
    vieww: "View code",
  },
];

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-y-16 ">
      {cardData.map((card) => (
        <div key={card.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={card.image}
              alt={card.description}
              width={350}
              height={350}
            />
          </figure>
          <div className="card-body ">
            <h2 className="text-center text-2xl  tracking-wider mt-">
              {card.title}
            </h2>
            <p className=" tracking-normal leading-relaxed mt-10">
              {card.description}
            </p>
            <p className=" tracking-normal leading-relaxed mt-5">{card.tech}</p>

            <div className="card-actions justify-start mt-10">
              <Image
                src={card.link}
                alt="icon"
                width={20}
                height={20}
                className="min-w-[20px] min-h-[20px] fill-white"
              />
              <a href={card.preview}>{card.prev}</a>

              <Image
                src={card.git}
                alt="icon"
                width={20}
                height={20}
                className="min-w-[20px] min-h-[20px] fill-white ml-20"
              />
              <a href={card.view}>{card.vieww}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
