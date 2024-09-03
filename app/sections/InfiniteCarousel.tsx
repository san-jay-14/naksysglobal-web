"use client";
import Carousel from "../components/Carousel";

export default function InfiniteCarousel() {
  const images = [
    "/portfolio-images/image-1.jpg",
    "/portfolio-images/image-2.jpg",
    "/portfolio-images/image-3.jpg",
    "/portfolio-images/image-4.jpg",
    "/portfolio-images/image-5.jpg",
    "/portfolio-images/image-6.jpg",
    "/portfolio-images/image-7.jpg",
    "/portfolio-images/image-8.jpg",
  ];
  return (
    <div className="text-white flex justify-center items-center pt-6 bg-[#171717]">
      <Carousel images={images} />
    </div>
  );
}
