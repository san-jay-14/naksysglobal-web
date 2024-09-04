"use client";
import addcircle from "../icons/add-circle.svg";
import Image from "next/image";
import { WhiteActionButton, ContactActionButton } from "../components/Buttons";

export default function Footer() {
  return (
    <div className="bg-[#df550d] h-auto w-[100%] max-w-[100vw] px-[8rem] pt-28 pb-[7rem]">
      <div className="flex flex-col text-white gap-4">
        <div>
          <h2 className="text-5xl font-light mb-4">Interested?</h2>
          <h1 className=" text-8xl font-bold">Work with us!</h1>
        </div>
        <div className="flex max-w-[22rem]">
          <p className="text-lg max-w-2xl">
            Contact us to discuss and collaborate on your software or app
            project!
          </p>
        </div>
        <div>
          <ContactActionButton text="Contact with Us!" color="black" />
        </div>
      </div>
    </div>
  );
}
