"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Assuming this provides a dark base background color
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import FeatureCard from "@/app/ui/home/FeatureCard";
import PlanCard from "@/app/ui/home/planCard";

import { useState } from "react";

// Define consistent gradient styles (Full Width)
const GRADIENT_HERO =
  "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800";
const GRADIENT_FEATURES =
  "bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-950";

export default function Page() {
  return (
    // 1. Set the main container to fill the screen height and use flex column
    <main className={`flex min-h-screen flex-col ${styles.bgMain}`}>
      {/* --- HERO SECTION WRAPPER: Full-width background and gradient --- */}
      {/* 2. Added h-screen and items-center to vertically center the Hero content */}
      <div
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center relative`}
      >
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-50"></div>
        <div
          // INNER CONTAINER: Centered content, max width
          className={`container flex flex-col gap-10 md:flex-row items-center mx-10 relative z-10`}
        >
          {/* Left Column: Text and CTA (Centered Horizontally) */}
          <div className="flex flex-col justify-center py-5 md:w-2/5 text-center">
            <h1
              className={`${lusitana.className} text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight`}
            >
              <strong className="block text-orange-500">FIJIK</strong>
              <span className="text-gray-300 text-2xl md:text-3xl block mt-2 uppercase tracking-wider">Lead Developer</span>
            </h1>

            <p
              className={`text-base text-gray-300 md:leading-relaxed p-4 mb-6 border-l-4 border-orange-500 bg-gray-900/50 backdrop-blur-sm mx-auto max-w-xl font-mono text-left`}
            >
              {`>`} Who am I? <br />
              {`  -`} I have the idea but i don't have the disign idea. <br />
              {`  -`} So I co-code the page i create the idea and my friend
              create the disign behind it. <br />
            </p>
          </div>

          {/* Right Column: Hero Images (Always Centered) */}
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-12">
            <div className="relative w-full aspect-[4/3] max-w-4xl border-2 border-orange-500/20 p-4">
              <Image
                src="/fijik.png"
                fill
                style={{ objectFit: "contain" }}
                className="hidden md:block rounded-2xl transform transition-transform duration-500 group-hover:scale-105 relative z-10"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <Image
                src="/fijik.png"
                fill
                style={{ objectFit: "contain" }}
                className="block md:hidden rounded-2xl transform transition-transform duration-500 group-hover:scale-105 relative z-10"
                alt="Screenshots of the dashboard project showing mobile version"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-900/90 h-auto py-8 w-full flex flex-row items-center justify-center gap-8 md:gap-16 border-y-2 border-orange-500/30 shadow-2xl flex-wrap px-4 relative`}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500"></div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>5 000+</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>Lines Writes</p>
        </div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>150+</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>Hours of code</p>
        </div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>250+</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>Hours of brainstorming</p>
        </div>
      </div>
      <div
        className={`w-full py-16 px-6 ${GRADIENT_FEATURES} flex flex-grow items-center justify-center relative`}
      >
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-50"></div>
        <div
          // INNER CONTAINER: Centered content, max width
          className={`container flex flex-col gap-10 md:flex-row items-center mx-10 relative z-10`}
        >
          {/* Right Column: Hero Images (Always Centered) */}
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-12">
            <div className="relative w-full aspect-[4/3] max-w-4xl border-2 border-orange-500/20 p-4">
              <Image
                src="/richee.webp"
                fill
                style={{ objectFit: "contain" }}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <Image
                src="/richee.webp"
                fill
                style={{ objectFit: "contain" }}
                className="block md:hidden"
                alt="Screenshots of the dashboard project showing mobile version"
              />
            </div>
          </div>
          {/* Left Column: Text and CTA (Centered Horizontally) */}
          <div className="flex flex-col justify-center py-10 md:w-2/5 text-center">
            <h1
              className={`${lusitana.className} text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight`}
            >
              <strong className="block text-orange-500">RICHEE</strong>
              <span className="text-gray-300 text-2xl md:text-3xl block mt-2 uppercase tracking-wider">Lead Designer</span>
            </h1>

            <p
              className={`text-base text-gray-300 md:leading-relaxed p-4 mb-6 border-l-4 border-orange-500 bg-gray-900/50 backdrop-blur-sm mx-auto max-w-xl font-mono text-left`}
            >
              {`>`} Who am I? <br />
              {`  -`} I make the disign manual for the whole project. <br />
              {`  -`} Also I co-code the main page of the first project and also i
              am behind coding the dashboard. <br />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
