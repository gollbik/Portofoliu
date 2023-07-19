import Image from "next/image";
import React from "react";

const Hi = () => {
  return (
    <div className="flex sm:mt-40 2xl:mt-64 sm:justify-center mt-10 justify-center items-center ">
      <div id="hi">
        <p className="sm:text-4xl 2xl:text-6xl text-xl justify-center items-center ">
          Hi, my name is
          <strong className="text-[rgb(24,173,244)]"> Alex </strong>
        </p>
      </div>
      <div className="avatar sm:ml-32 sm:-mt-14 justify-center ml-10">
        <div className="w-[150px]  sm:w-[250px] lg:w-[280px] 2xl:w-[350px] rounded-full overflow-hidden ring ring-[rgb(204,37,180)] ring-offset-base-100 ring-offset-2 flex items-start">
          <Image src="/avatar.jpg" width={300} height={300} alt="wallpaper" />
        </div>
      </div>
    </div>
  );
};

export default Hi;
