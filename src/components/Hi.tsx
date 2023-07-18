import Image from "next/image";
import React from "react";

const Hi = () => {
  return (
    <div className="flex sm:mt-64 sm:justify-center mt-10 justify-center">
      <div id="hi">
        <p className="sm:text-6xl text-xl ">
          Hi, my name is
          <strong className="text-[rgb(24,173,244)]"> Alex </strong>
        </p>
      </div>
      <div className="avatar sm:ml-80 sm:-mt-14 ml-10">
        <div className="w-[150px] sm:w-[380px] rounded-full overflow-hidden ring ring-[rgb(204,37,180)] ring-offset-base-100 ring-offset-2">
          <Image src="/avatar.jpg" width={300} height={300} alt="wallpaper" />
        </div>
      </div>
    </div>
  );
};

export default Hi;
