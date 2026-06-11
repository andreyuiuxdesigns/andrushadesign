"use client";

import { useRef, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { assets } from "@/lib/assets";

const projects = [
  { title: "Online Clothing Marketplace", date: "12.05.26" },
  { title: "Crypto Wallet App", date: "26.04.26" },
  { title: "Premium Fragrance Online Store", date: "21.03.26" },
  { title: "Online Casino Platform", date: "03.02.26" },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="pt-16 pb-8">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[28px] font-semibold text-black">Featured Projects</h2>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="bg-[#f0f0f0] px-4 rounded-[20px] h-10 flex items-center text-[14px] font-medium text-black hover:bg-gray-200 transition-colors"
            >
              View all
            </a>
            {/* Nav arrows */}
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-[#e5e3e3] flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Previous"
            >
              <img
                src={assets.carouselArrow}
                alt=""
                className="w-4 h-4 rotate-90 opacity-50"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Next"
            >
              <img
                src={assets.carouselArrow}
                alt=""
                className="w-4 h-4 -rotate-90"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Cards — horizontal scroll on mobile/tablet, row on desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-[18px] overflow-x-auto lg:overflow-x-visible scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <div key={project.title} className="snap-start flex-shrink-0 w-[82vw] sm:w-[48%] lg:w-auto lg:flex-1">
              <ProjectCard title={project.title} date={project.date} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
