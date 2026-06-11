"use client";

import { useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { label: "Portfolio", href: "#projects" },
  { label: "About me", href: "#about" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-nav h-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] h-full flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="font-semibold text-[15px] text-black tracking-tight">
          AY
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-8 lg:gap-12 text-[14px] font-medium text-[#262626]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0070f3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacts"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#0070f3] hover:text-[#0060d9] transition-colors"
          >
            Contact
            <img src={assets.arrowBendDownRight} alt="" className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-12 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#262626] hover:text-[#0070f3] transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="text-[15px] font-semibold text-[#0070f3] py-1"
              onClick={() => setMobileOpen(false)}
            >
              Contact ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
