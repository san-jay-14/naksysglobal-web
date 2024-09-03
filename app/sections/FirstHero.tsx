"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from '../lottiefiles/Animation - 1725373039287.json'
import Lottie from 'lottie-react';

export default function FirstHero() {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="w-full flex py-8 px-32 h-[85vh]">
      <div className="flex">
        <div className="w-[60%] flex flex-col items-center justify-center">
          <h1 className="text-left text-5xl font-bold mb-4">
            The Essential Software Application Developers.
          </h1>
          <p className="text-left text-lg">
            Whatever your unique idea or needs, we’ve got the tools and know how
            to build your custom solution from discovery to deployment.
          </p>
        </div>
        <div className="w-[40%]">
          <div>
          <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
    </div>
  );
}
