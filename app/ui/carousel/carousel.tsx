"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CarouselItem {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [items.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm shadow-xl">
      {/* Decorative top bar */}
      <div className="h-1 w-full bg-orange-500/50"></div>

      <div className="relative h-72 md:h-64">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full pointer-events-none"
            }`}
            // Note: Simple translateX logic for basic sliding, though absolute positioning with opacity fade is often smoother for simple text carousels.
            // For a true slide effect with absolute positioning, we'd need more complex logic or a library.
            // Here we use opacity fade + slight scale or just opacity for simplicity in "vanilla" React.
            // Let's stick to opacity for a clean "terminal refresh" look.
          >
            {item.icon && (
              <div className="mb-4 p-3 rounded-full bg-orange-500/10 border border-orange-500/30">
                <item.icon className="w-8 h-8 text-orange-500" />
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-wider">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-orange-500 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-orange-500 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-600 w-2 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
