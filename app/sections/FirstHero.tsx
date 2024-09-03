"use client";
import animationData from "../lottiefiles/Animation - 1725373039287.json";
import Lottie from "lottie-react";
import { PurpleActionButton } from "../components/Buttons";

export default function FirstHero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full flex py-8 px-32 h-[85vh]">
      <div className="flex">
        <div className="w-[60%] flex flex-col items-start justify-center mx-auto">
          <h1 className="text-left text-5xl font-bold mb-8">
            The <span className="text-[#df540c]">Essential</span> Software Application Developers.
          </h1>
          <p className="text-left text-base max-w-xl mb-8">
            Whatever your unique idea or needs, we’ve got the tools and know how
            to build your custom solution from discovery to deployment.
          </p>
          <div className="flex gap-3">
            <PurpleActionButton text = "See our work"/>
            <PurpleActionButton text = "Contact us"/>
          </div>
        </div>

        <div className="w-[40%] flex justify-center">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}
