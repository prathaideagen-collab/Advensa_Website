"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ButtonComponent from "./button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/20
      ${scrolled ? "bg-white/30 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center px-3 py-2 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/#treks">
            <img
              src="/advensapic.png"
              alt="Logo"
              className="w-10 h-10 md:w-16 md:h-16 object-contain cursor-pointer rounded-full bg-transparent"
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/#treks"
            className="text-sm font-medium text-black hover:text-blue-600"
          >
            Treks
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-black hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-black hover:text-blue-600"
          >
            Contact
          </Link>
          <ButtonComponent />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-black/10 transition-colors"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
{/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden flex flex-col gap-4 p-2 bg-white/30 backdrop-blur-md border-t border-white/20">
    <Link
      href="/#treks"
      className="text-sm text-black hover:text-blue-600 py-1"
      onClick={() => setIsOpen(false)}
    >
      Treks
    </Link>
    <Link
      href="/#services"
      className="text-sm text-black hover:text-blue-600 py-1"
      onClick={() => setIsOpen(false)}
    >
      Services
    </Link>
    <Link
      href="/#contact"
      className="text-sm text-black hover:text-blue-600 py-1"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
    <div className="w-full">
      <ButtonComponent />
    </div>
  </div>
)}

    </nav>
  );
}
