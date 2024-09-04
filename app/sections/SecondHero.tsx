"use client";

import Card from "../components/Card";
import Carousel from "../components/Carousel";
import InfiniteCarousel from "./InfiniteCarousel";
import {
  TransparentBlackButton,
  WhiteActionButton,
} from "../components/Buttons";

export default function FirstHero() {
  return (
    <div>
      <InfiniteCarousel />
      <div className="bg-[#171717] text-white flex justify-center items-center px-[2rem] py-[2.5]">
        <div className="px-[4rem] mb-[4rem] ">
          <div className="p-[3rem] ">
            <div className="max-w-[56rem] w-[100%] text-center">
              <p className=" text-5xl font-semibold leading-[1.2]">
                Building
                <span className="bg-gradient-to-b from-[#df550d] to-[#e08b5e] bg-clip-text text-transparent">
                  {" "}
                  top quality{" "}
                </span>
                software & apps for over fifteen years.
              </p>
            </div>
            <div className="justify-center mt-[3.5rem] flex flex-col gap-[1rem]">
              <div className="flex gap-4 self-center">
                {" "}
                <TransparentBlackButton text="Web Applications" />
                <TransparentBlackButton text="Mobile Applications" />
                <TransparentBlackButton text="Business Platforms" />
              </div>
              <div className="flex gap-4 self-center">
                <TransparentBlackButton text="UI/UX Design" />
                <TransparentBlackButton text="Software Support" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-2 ">
            <div className="text-sm text-center max-w-[40rem] w-[100%] ">
              Revolutionize your business with our mobile app and software
              development expertise, delivering innovative solutions to elevate
              your brand and boost your bottom line.
            </div>
            <div className="mb-[3rem]">
              <WhiteActionButton text="More about our services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
