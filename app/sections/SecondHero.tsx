"use client";

import Card from "../components/Card";
import Carousel from "../components/Carousel";
import InfiniteCarousel from "./InfiniteCarousel";

export default function FirstHero() {
  return (
    <div>
      <InfiniteCarousel />
      <div
        className="text-white flex justify-center items-center px-[2rem] py-[2.5]"
        style={{
          backgroundColor: "#171717 ",
        }}
      >
        <div className="p-[4rem] mb-[4rem]">
          <div className="p-[3rem]">
            <div className="max-w-[56rem] w-[100%] text-center">
              <p className="mt-[1rem] text-5xl font-semibold leading-[1.2]">
                Building
                <span className="bg-gradient-to-b from-[#df550d] to-[#e08b5e] bg-clip-text text-transparent">
                  {" "}
                  top quality{" "}
                </span>
                software & apps for over fifteen years.
              </p>
            </div>
            <div className="text-center">buttons</div>
          </div>
          <div className="text-center">
            <div className="text-sm">text</div>
            <div>button</div>
          </div>
        </div>
      </div>
    </div>
  );
}
