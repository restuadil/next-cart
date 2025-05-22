"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: assets.header_playstation_image,
      title: "PlayStation 5",
      description:
        "The PlayStation 5 is a home video game console developed by Sony Interactive Entertainment. Experience lightning-fast loading, deeper immersion, and stunning gaming visuals.",
    },
    {
      id: 2,
      image: assets.header_macbook_image,
      title: "MacBook Pro",
      description:
        "The MacBook Pro is a line of high-performance laptops designed by Apple. Perfect for developers, designers, and power users who demand speed and reliability.",
    },
    {
      id: 3,
      image: assets.header_headphone_image,
      title: "Sony Headphones",
      description:
        "Sony headphones are known for their high-quality sound and noise-canceling features. Enjoy your music with crystal clarity and immersive audio experience.",
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleIndicatorClick = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCarouselIndex(index);
      setFade(true);
    }, 300);
  };

  const currentCarouselItem = carouselItems[carouselIndex];

  return (
    <section className="rounded-lg bg-slate-50 px-16 py-8 shadow-md">
      {/* carousel content */}
      <div
        className="flex h-[350px] flex-row justify-between gap-10 transition-opacity duration-500 ease-in-out"
        style={{ opacity: fade ? 1 : 0 }}
      >
        {/* Left content */}
        <div className="flex w-1/2 flex-col justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold text-green-600">
              {currentCarouselItem.title}
            </h1>
            <p className="line-clamp-5 h-[120px] text-xl font-medium leading-normal text-gray-700">
              {currentCarouselItem.description}
            </p>
          </div>
          <button className="mt-4 w-[200px] rounded-3xl bg-green-500 px-8 py-3 font-semibold tracking-wider text-slate-50 transition hover:bg-green-600">
            Buy Now
          </button>
        </div>

        {/* Right image */}
        <div className="flex items-center">
          <Image
            priority
            src={currentCarouselItem.image}
            alt={currentCarouselItem.title}
            width={300}
            height={300}
            className="rounded-lg object-cover"
            style={{
              height: "auto",
              width: "auto",
            }}
          />
        </div>
      </div>

      {/* indicator bar */}
      <div className="mt-6 flex justify-center gap-2">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleIndicatorClick(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              carouselIndex === idx ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
