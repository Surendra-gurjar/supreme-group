"use client";

import { useState } from "react";
import { Pause } from "lucide-react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const vehicleTypes = [
    {
      title: "Complete Body vehicles",
      description: "Revving up Nonwoven innovation from interior to exterior.",
      img: "/assets/complete-body-car.mp4",
      imgPng: "/assets/complete-body-car-img.png",
      categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    },
    {
      title: "Front vehicles",
      imgPng: "/assets/front-car.png",
      img: "/assets/front-car-video.mp4",
      description: "Advanced solutions for heavy-duty applications.",
      categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    },
    {
      title: "Cabin vehicles",
      imgPng: "/assets/cabin-car.png",
      img: "/assets/cabin-video.mp4",
      description: "Advanced solutions for heavy-duty applications.",
      categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    },
    {
      title: "Trunk vehicles",
      imgPng: "/assets/trunk-car.png",
      img: "/assets/trunk-video.mp4",
      description: "Advanced solutions for heavy-duty applications.",
      categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    },
    {
      title: "Exterior vehicles",
      imgPng: "/assets/exterior-car.png",
      img: "/assets/exterior-video.mp4",
      description: "Advanced solutions for heavy-duty applications.",
      categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    },
  ];

  const handleCategoryClick = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section className="bg-black min-h-screen relative p-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center pt-8 md:pt-12 lg:pt-16 pb-10 md:pb-16 lg:pb-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            <span className="block">
              Evolving the drive with{" "}
              <span className="font-normal">360-degree</span>
            </span>
            <span className="block mt-2">nonwoven solutions</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute left-0 top-0 w-px h-16 bg-white/20" />
            <div className="pl-8">
              <h2 className="text-white text-2xl md:text-3xl font-light mb-3 md:mb-4">
                Passenger vehicles
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-6 md:mb-8">
                Revving up innovation from interior to exterior.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="mb-6 md:mb-8 lg:mb-12">
                {vehicleTypes.map((vehicle, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <video
                      src={vehicle.img}
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                {[
                  {
                    img: "/assets/complete-body-car-img.png",
                    label: "Complete Body",
                  },
                  { img: "/assets/front-car.png", label: "Front" },
                  { img: "/assets/cabin-car.png", label: "Cabin" },
                  { img: "/assets/trunk-car.png", label: "Trunk" },
                  { img: "/assets/exterior-car.png", label: "Exterior" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center transition-opacity duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    onClick={() => handleCategoryClick(idx)}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain mb-1 md:mb-2"
                    />
                    <span className="text-white text-xs md:text-sm text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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

export default Services;
