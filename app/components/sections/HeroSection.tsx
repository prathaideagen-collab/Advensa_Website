"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



export default function EverestBaseCampTrek() {
  return (
    <section id= "treks" className=" flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-100 via-blue-200 to-green-100 text-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            14-Day{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent font-bold">
              Everest
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-800 to-green-800 bg-clip-text text-transparent font-bold">
              Base
            </span>{" "}
            <span className="bg-gradient-to-r from-green-800 to-green-700  bg-clip-text text-transparent font-bold">
              Camp
            </span>{" "}
            Trek From $2,499
          </h1>
          <p className=" text-black mb-6 text-sm md:text-base">
            International support • Local expertise 
          </p>

          {/* Buttons */}
{/* Buttons */}
<div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center mb-12">
  <a href="https://wa.me/61430046850?text=Hello%2C%20I%20am%20interested">
    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
      Enquire on WhatsApp
    </button>
  </a>

  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2hYOa112HRlLHp_abNswvIib9RuK8n2tL3ufXKn2QVpH0OKzV-6zl12eSKXHCTK-wBf3CFsT0j">
    <button className="px-4 sm:px-6 py-2 sm:py-3 text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-600 hover:text-white shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
      Book Your Trek
    </button>
  </a>
</div>



        </div>

        {/* Trek Image Slider */}
<div className="h-[600px] rounded-2xl mb-6 overflow-hidden relative 
                shadow-2xl border border-white/20 
                hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-300">

  <Slide
    autoplay
    duration={3000}
    transitionDuration={500}
    infinite={true}
    arrows={true}
    prevArrow={
      <button className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4
        bg-white/80 hover:bg-white 
        w-12 h-12 flex items-center justify-center 
        rounded-full shadow-xl backdrop-blur-sm
        text-2xl text-gray-800 hover:text-black
        transition-all duration-200 z-10">
        🡨
      </button>
    }
    nextArrow={
      <button className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4
        bg-white/80 hover:bg-white 
        w-12 h-12 flex items-center justify-center 
        rounded-full shadow-xl backdrop-blur-sm
        text-2xl text-gray-800 hover:text-black
        transition-all duration-200 z-10">
        🡪
      </button>
    }
  >
    {[
      "/img1.jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img4.jpg",
      "/img5.jpg",
      "/img6.jpg",
      "/img7.jpg"
    ].map((src, index) => (
      <div key={index} className="w-full h-[600px]">
        <img
          src={src}
          alt={`Trek ${index + 1}`}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    ))}
  </Slide>
</div>




        {/* Trust Indicators */}
        <div className="flex justify-center gap-4 sm:gap-8 text-gray-600  flex-wrap">
          {/* Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left min-w-[80px]">
            <span className="text-yellow-500 text-lg sm:mr-2">⭐</span>
            <div className="flex flex-col sm:flex-row items-center">
              <span className="text-sm md:text-base font-semibold">5</span>
              <a
                href="https://www.google.com/search?sca_esv=e2d404020a096c28&sxsrf=AE3TifPrGaPzQNw1h53HJPIEOtN1mAurgQ:1756551029727&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EykOy1OYJxQ0zC9848IqiGe33Lw78nS6HAmlg-i_fDC2OKUg7Fx3zfiH2fcRlwV9U9PlgNqGtx-dm6jQjTiuyxdqrmaQ&q=Advensa+Travel+Reviews&sa=X&ved=2ahUKEwi8oqDBrrKPAxWUzDgGHe3-D7YQ0bkNegQIIxAE&biw=1536&bih=791&dpr=1.25"
          
                rel="review"
                className="text-sm md:text-base sm:ml-1 hover:underline"
              >
                Google Reviews
              </a>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left min-w-[80px]">
            <span className="text-blue-500 text-lg sm:mr-2">👥</span>
            <div className="flex flex-col sm:flex-row items-center">
              <span className="text-sm md:text-base font-semibold">15+</span>
              <span className="text-sm md:text-base sm:ml-1">Years Experience</span>
            </div>
          </div>

          {/* Licensed Guides */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left min-w-[80px]">
            <span className="text-green-500 text-lg sm:mr-2">😊</span>
            <div className="flex flex-col sm:flex-row items-center">
              <span className="text-sm md:text-base font-semibold">1000+</span>
              <span className="text-sm md:text-base sm:ml-1">Happy Clients</span>
            </div>
          </div>
        </div>

{/* Quick Highlights Section */}
        
          {/* <div className="font-bold mb-6">
            <h2 className="text-4xl bg-gradient-to-r from-red-500 to-green-800 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent font-bold">
                Quick{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-900 to-green-700 bg-clip-text text-transparent font-bold">
                Highlights
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-sm md:text-base">
                🍽️ All meals, flights & permits included
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm md:text-base">
                🧳Flexible departure dates
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm md:text-base">
                ⛰️ Daily guided treks with expert sherpas
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm md:text-base">
                ✈️ Free airport transfers in Kathmandu
              </span>
            </div>
          </div> */}
        </div>

  
    </section>




  );
}
