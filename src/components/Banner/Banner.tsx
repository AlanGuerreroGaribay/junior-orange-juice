import React from "react";
//@ts-ignore
import bannerImage from "../../assets/orange-bowl-img.jpg";
export const Banner = () => {
  return (
    <div className="mt-32 relative bg-[#e6e3e3]  w-full lg:h-[600px] md:h-[500px] sm:h-[350px] h-[230px] bg-cover">
      <img
        src={bannerImage}
        alt="Banner"
        className=" w-full max-w-[1200px] h-full m-auto"
      />
    </div>
  );
};
