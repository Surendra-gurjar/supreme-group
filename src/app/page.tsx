"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoSection from "@/components/videoSection";

const HeroSection = dynamic(() => import("@/components/heroSection"), {
  ssr: false,
  loading: () => <div></div>,
});
const Services = dynamic(() => import("@/components/services"), {
  ssr: false,
  loading: () => <div></div>,
});
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => <div></div>,
});

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <HeroSection />
        </div>

        <div>
          <Services />
          <VideoSection />
        </div>

        <div>
          <Contact />
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
