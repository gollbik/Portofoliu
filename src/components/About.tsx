import React from "react";
import { IExperienceCard } from "./ExperienceCard";
import { v4 } from "uuid";
import ExperienceInfo from "./ExperienceInfo";

const experience: IExperienceCard[] = [
  {
    id: v4(),
    title: "Call-center Studio Moderna",
    company: "TOP-SHOP S.R.L.",
    location: "Chisinau",
    timePeriod: "2022 June - 2022 Oct",
    type: "Full time",
  },
  {
    id: v4(),
    title: "React development Intern",
    company: "Indrivo S.R.L.",
    location: "Chisinau",
    timePeriod: "2023 Jun - 2023 Jul",
    type: "Full time",
  },
];

const education: IExperienceCard[] = [
  {
    id: v4(),
    company: "Centrul de Excelenta in Informatica si Tehnologii Informationale",
    location: "Chisinau",
    timePeriod: "Sept 2020 - June 2024",
    title: "CEITI",
    type: "Full time",
  },
];

const About = () => {
  return (
    <div className=" gap-x-12 mt-28 gap-y-16 ml-5 sm:ml-0 ">
      <ExperienceInfo experiences={experience} mainTitle="Experience" />
      <ExperienceInfo experiences={education} mainTitle="Education" />
    </div>
  );
};

export default About;
