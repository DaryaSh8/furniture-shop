import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-[#2A254B] hover:bg-[#4E4D93] text-white py-[12px] px-[32px]"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
