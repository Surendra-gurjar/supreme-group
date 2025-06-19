"use client";

import { useState } from "react";
import { Pause } from "lucide-react";
import Image from "next/image";

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const videoList = [
    {
      title: "Complete Body vehicles",
      description: "Revving up Nonwoven innovation from interior to exterior.",
      video: "/assets/Commercial Alpha.Truck.92c92d40f9116c837d1d.mp4",
      thumbnail: "/assets/complete-body-car-img.png",
    },
    {
      title: "Engine Vehicles",
      description: "Advanced solutions for heavy-duty applications.",
      video: "/assets/front-car-video.mp4",
      thumbnail: "/assets/front-car.png",
    },
    {
      title: "Cabin Vehicles",
      description: "Cabin comfort with engineering precision.",
      video: "/assets/cabin-video.mp4",
      thumbnail: "/assets/cabin-car.png",
    },
  ];

  const handleCategoryClick = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section className="bg-black min-h-screen relative p-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute left-0 top-0 w-px h-16 bg-white/20" />
            <div className="pl-8">
              <h2 className="text-white text-2xl md:text-3xl font-light mb-3 md:mb-4">
                Commercial Vehicles
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-6 md:mb-8">
                Advancing engineering for heavy-duty vehicles.
              </p>
            </div>
          </div>

          {/* Right Videos */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="mb-6 md:mb-8 lg:mb-12">
                {videoList.map((vehicle, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <video
                      src={vehicle.video}
                      autoPlay
                      loop
                      muted
                      className="rounded-lg w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Category Icons */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                {videoList.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center transition-opacity duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    onClick={() => handleCategoryClick(idx)}
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain mb-1 md:mb-2"
                    />

                    <span className="text-white text-xs md:text-sm text-center">
                      {item.title.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <Pause className="text-white w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
