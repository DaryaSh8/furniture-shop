import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="p-[68px] flex items-start justify-center gap-[65px]">
      <div className="flex flex-col gap-[20px] text-[20px]">
        <span>21 New York Street</span>
        <span>New York City</span>
        <span>United States of America</span>
        <span>432 34</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[16px] mb-[22px]">Social links</span>
        <div className=" grid grid-cols-6 mobile:grid-cols-2 tablet:grid-cols-3 gap-[24px] mobile:gap-[16px] text-[20px]">
          <FaFacebookSquare />
          <FaLinkedin />
          <IoLogoInstagram />
          <FaSkype />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
