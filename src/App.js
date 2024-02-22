import React, { useRef } from "react";
import Header from "./components/Header";
import { SlArrowUp } from "react-icons/sl";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const linkToUp = useRef(null);

  const scrollEffect = (targetRef) => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div
        className="mx-auto max-w-[1280px] text-[#222] w-full flex-grow"
        ref={linkToUp}
      >
        <Header />

        <div className="h-full">
          <Outlet></Outlet>
        </div>

        <SlArrowUp
          className="fixed bottom-[70px] cursor-pointer right-[70px] rounded-[50%] text-[40px] bg-[#2A254B]  hover:bg-[#4E4D93] text-white p-[10px] "
          onClick={() => {
            scrollEffect(linkToUp);
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
