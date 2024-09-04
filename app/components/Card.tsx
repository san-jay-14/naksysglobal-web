import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import Arrow from "../../public/portfolio-images/arrow.svg";
import Image from "next/image";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[300px] min-w-[300px] bg-slate-400 rounded-xl flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-20 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dark semi-transparent background */}
            <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />

            {/* Text and arrow */}
            <motion.h1
              className="relative z-30 bg-white font-semibold text-sm px-3 py-2 rounded-full flex items-center gap-1 hover:opacity-75 cursor-pointer"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-black">Explore Now</span>
              <Arrow className="h-4 w-4" />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
