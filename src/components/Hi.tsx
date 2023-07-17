import Image from "next/image";
import React from "react";

const Hi = () => {
  return (
    <div className="flex mt-64 justify-center">
      <div id="hi">
        <p className="text-6xl ">
          Hi, my name is
          <strong className="text-[rgb(24,173,244)]"> Alex </strong>
        </p>
      </div>
      <div className="avatar ml-80 -mt-14">
        <div className="w-[380px] rounded-full overflow-hidden ring ring-[rgb(204,37,180)] ring-offset-base-100 ring-offset-2">
          <Image src="/avatar.jpg" width={150} height={150} alt="wallpaper" />
        </div>
      </div>
    </div>
  );
};

export default Hi;
