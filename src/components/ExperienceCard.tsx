import Image from "next/image";
import React from "react";

export interface IExperienceCard {
  id: string;
  title: string;
  type: string;
  company: string;
  location: string;
  timePeriod: string;
}

const ExperienceCard = ({
  title,
  type,
  company,
  location,
  timePeriod,
}: Omit<IExperienceCard, "id">) => {
  return (
    <div className="flex max-w-4xl w-full flex-col gap-y-2 border-b-[1px] pb-7 px-5 pt-2 mb-20">
      <div className="flex justify-between items-center">
        <h2 className=" max-w-[25ch] leading-7 max-h-7 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold">
          {title}
        </h2>
        <p className="py-2 px-4 content-success rounded-3xl capitalize">
          {type}
        </p>
      </div>
      <div className="flex mt-5 ">
        <div className="flex w-1/3 gap-x-2">
          <Image src="/job.svg" width={20} height={20} alt={title} />
          <p className=" max-w-[25ch] max-h-7 overflow-hidden text-ellipsis whitespace-nowrap capitalize">
            {company}
          </p>
        </div>
        <div className="flex gap-x-2">
          <Image src="/location.svg" width={20} height={20} alt={title} />
          <p className=" max-w-[25ch] max-h-7 overflow-hidden text-ellipsis whitespace-nowrap capitalize">
            {location}
          </p>
        </div>
        <div className="flex ml-auto gap-x-2">
          <Image src="/calendar.svg" width={20} height={20} alt={title} />
          <p className=" max-w-[25ch] max-h-7 text-ellipsis overflow-hidden whitespace-nowrap ">
            {timePeriod}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
