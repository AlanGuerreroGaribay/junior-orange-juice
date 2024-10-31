import React from "react";
//@ts-ignore
import bannerImage from "../../assets/orange-bowl-img.jpg";
export const Banner = () => {
  return (
    <div className="mt-32 relative bg-[#f0ecec] w-full h-[750px] bg-cover">
      <img
        src={bannerImage}
        alt="Banner"
        className=" w-[1400px] h-full m-auto object-cover"
      />
    </div>
  );
};
