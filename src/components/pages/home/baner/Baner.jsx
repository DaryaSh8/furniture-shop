import React from "react";
import Slider from "../../../ui/Slider";
import Slide from "./Slide";

const slides = [
  {
    title: "The furniture brand for the future, with timeless designs",
    text: `A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.`,
    link: "#products",
    img: "/images/Container.svg",
  },
  {
    title: "It started with a small idea",
    text: `A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014`,
    link: "#products",
    img: "/images/Container2.svg",
    reverse: true,
  },
  {
    title: "From a studio in London to a global brand with over 400 outlets",
    text: `When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.   Handmade,
          and lovingly crafted furniture and homeware is what we live, breathe
          and design so our Chelsea boutique become the hotbed for the London
          interior design community.`,
    link: "#products",
    img: "/images/Container3.svg",
  },
];

const Baner = () => {
  return (
    <Slider>
      {slides.map((slide) => (
        <Slide key={slide.title} {...slide} />
      ))}
    </Slider>
  );
};

export default Baner;
