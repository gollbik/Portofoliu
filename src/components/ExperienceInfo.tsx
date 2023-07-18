import React from "react";
import ExperienceCard, { IExperienceCard } from "./ExperienceCard";

interface ExperienceInfoProps {
  mainTitle: string;
  experiences: IExperienceCard[];
}

const ExperienceInfo = ({ mainTitle, experiences }: ExperienceInfoProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="font-bold text-3xl mt-10 mb-10 text-[rgb(125,96,208)]">
        {mainTitle}
      </h2>
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          company={exp.company}
          location={exp.location}
          timePeriod={exp.timePeriod}
          title={exp.title}
          type={exp.type}
        />
      ))}
    </div>
  );
};

export default ExperienceInfo;
