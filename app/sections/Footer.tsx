"use client"
import addcircle from "../icons/add-circle.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#171717] h-auto w-[100%] max-w-[100vw] px-20 pt-28 pb-10">
      <div className="flex flex-col">
        <h2 className="text-[#737373] text-6xl mb-4">Excited?</h2>
        <h1 className="text-[#f9f9f9] text-8xl font-bold mb-10">
          Let's Work Together!
        </h1>
        <div className="flex">
          <p className="text-[#959595] text-xl max-w-2xl">
            Our success in collaborating with clients is determined by effective
            communication, mutual understanding, and a shared commitment to
            achieving goals.
          </p>
          <Image src={addcircle} alt="add-circle icon" />
        </div>
      </div>
    </div>
  );
}
