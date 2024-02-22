import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative mt-[50px]">
      <SlArrowLeft
        className="text-white text-[70px] absolute top-1/2 cursor-pointer"
        onClick={() => setIndex((prevState) => Math.max(0, prevState - 1))}
      />
      {children[index]}
      <SlArrowRight
        className="text-white text-[70px] absolute top-1/2 right-0 cursor-pointer"
        onClick={() =>
          setIndex((prevState) => Math.min(children.length - 1, prevState + 1))
        }
      />
    </div>
  );
};

export default Slider;
