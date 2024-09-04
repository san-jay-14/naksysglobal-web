import React from "react";
import Arrow from "../../public/right_arrow.svg";
import { motion } from "framer-motion";

export function PurpleActionButton({ text }: { text: string }) {
  return (
    <button
      className={`px-4 py-2 bg-[#df540c] text-white rounded-3xl hover:bg-purple-700 transition-colors}`}
    >
      {text}
    </button>
  );
}

export function TransparentWhiteButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-white text-black border border-black rounded-3xl hover:bg-gray-100 transition-colors">
      {text}
    </button>
  );
}

export function TransparentBlackButton({ text }: { text: string }) {
  return (
    <button className="px-5 py-2 bg-[#171717] text-white text-lg border border-white rounded-3xl hover:bg-[#df550d] hover:border-[#df550d] transition-colors">
      {text}
    </button>
  );
}

export function GreyActionButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-[#e6e7e7] text-black rounded-3xl hover:bg-[#b8b9b9] transition-colors">
      {text}
    </button>
  );
}

export function WhiteActionButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-[#e6e7e7] text-black rounded-3xl hover:bg-[#b8b9b9] transition-colors">
      {text}
    </button>
  );
}

{
  /* 
  this button accepts a text prop and a color prop.
  the color can be given as hex or rgb or any other valid css color value.
  */
}

export function ContactActionButton({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <motion.div className="inline-flex items-center group" whileHover="hover">
      <button
        className="px-6 py-2 text-white rounded-3xl hover:bg-purple-700 transition-colors"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>

      <motion.div
        className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: color }}
        variants={{
          hover: { x: 5 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Arrow className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
}
