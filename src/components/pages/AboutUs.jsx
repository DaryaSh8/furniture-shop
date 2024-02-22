import React from "react";
import { TfiCar } from "react-icons/tfi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiPlant } from "react-icons/pi";
import { PiCreditCard } from "react-icons/pi";
import Button from "../ui/Button";

const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mobile:grid-cols-1 gap-[16px] h-full mb-[100px]">
        <img src="/images/Container4.svg" alt="Baner" />

        <div className="flex flex-col justify-between py-[48px] px-[56px] mobile:px-[26px]">
          <span className="text-[32px]">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </span>
          <span>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </span>
          <span>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[28px] text-center">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 gap-[22px] mobile:gap-[10px] tablet:gap-[15px] px-[80px] mobile:px-[40px] py-[36px]">
          <div className="bg-[#F9F9F9] p-[48px] flex flex-col gap-[12px]">
            <TfiCar className="text-[24px]" />
            <span className="text-[20px]">Next day as standard</span>
            <span className="text-[16px]">
              Order before 3pm and get your order the next day as standard
            </span>
          </div>
          <div className="bg-[#F9F9F9] p-[48px] flex flex-col gap-[12px]">
            <IoIosCheckmarkCircleOutline className="text-[24px]" />
            <span className="text-[20px]">Made by true artisans</span>
            <span className="text-[16px]">
              Handmade crafted goods made with real passion and craftmanship
            </span>
          </div>
          <div className="bg-[#F9F9F9] p-[48px] flex flex-col gap-[12px]">
            <PiCreditCard className="text-[24px]" />
            <span className="text-[20px]">Unbeatable prices</span>
            <span className="text-[16px]">
              For our materials and quality you won’t find better prices
              anywhere
            </span>
          </div>
          <div className="bg-[#F9F9F9] p-[48px] flex flex-col gap-[12px]">
            <PiPlant className="text-[24px]" />
            <span className="text-[20px]">Recycled packaging</span>
            <span className="text-[16px]">
              We use 100% recycled to ensure our footprint is more manageable
            </span>
          </div>
        </div>
      </div>
      <div className="p-[68px] mobile:p-[30px] mb-[80px]">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[36px] mb-[16px]">
            Join the club and get the benefits
          </span>
          <span className="text-[16px] mb-[72px]">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </span>
          <form className="text-[16px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="bg-[#F9F9F9] py-[12px] px-[32px] "
              placeholder="your@email.com"
            />
            <Button>Sign up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
