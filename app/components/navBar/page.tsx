

import Link from "next/link";
import ButtonComponent from "./button";
// import HomePage from "../../HomePage/page";

export default function Navbar() {
  return (
   <nav className="fixed top-0 w-full flex flex-nowrap justify-end items-center gap-4 p-4 bg-white/30 backdrop-blur-md border-b border-white/20 z-50 overflow-x-auto">
  <Link href="/#treks" className="text-xs md:text-base text-black hover:text-blue-600 transition-colors duration-200">Treks</Link>
  <Link href="/#qa" className="text-xs md:text-base text-black hover:text-blue-600 transition-colors duration-200">Q&A</Link>
  <Link href="/#about" className="text-xs md:text-base text-black hover:text-blue-600 transition-colors duration-200">About</Link>
  <Link href="/#services" className="text-xs md:text-base text-black hover:text-blue-600 transition-colors duration-200">Services</Link>
  <Link href="/#contact" className="text-xs md:text-base text-black hover:text-blue-600 transition-colors duration-200">Contact</Link>
  <div className="flex-shrink-0 ml-4">
    <ButtonComponent />
  </div>
</nav>


  );
}