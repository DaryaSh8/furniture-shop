import React from "react";

const Slide = ({ title, text, link, img, reverse = false }) => {
  return (
    <div className="text-white grid grid-cols-2 mobile:grid-cols-1 gap-[16px] h-full">
      <div className="bg-[#2A254B]  p-[64px] mobile:p-[24px] flex flex-col justify-between">
        <div>
          <div className=" text-[32px] mb-[12px]">{title}</div>
          <div className=" text-[18px] mb-[24px]">{text}</div>
        </div>

        <div>
          <a
            className="px-[32px] py-[7px] text-white bg-[#4E4D93] cursor-pointer "
            href={link}
          >
            View collection
          </a>
        </div>
      </div>

      <div className={reverse ? "-order-1" : ""}>
        <img
          src={img}
          alt="Baner"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Slide;
