"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



export default function EverestBaseCampTrek() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-100 via-blue-200 to-green-200 text-black">
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
          
          <div className="flex gap-4 justify-center sm:justify-start items-center mb-12 flex-nowrap">
            <a href="https://wa.me/61430046850?text=Hello%2C%20I%20am%20interested">
            <button className="px-6 py-3 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
              Enquire on WhatsApp
            </button>
            </a>

<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2hYOa112HRlLHp_abNswvIib9RuK8n2tL3ufXKn2QVpH0OKzV-6zl12eSKXHCTK-wBf3CFsT0j">
            <button className="px-6 py-3 text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-600 hover:text-white shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
              Book Your Trek
            </button>
            </a>
          </div>

        </div>

        {/* Trek Image Slider */}
<div className="h-[600px] rounded-2xl mb-6 overflow-hidden relative">
  <Slide
    autoplay
    duration={3000}
    transitionDuration={500}
    infinite={true}
    arrows={true}
    prevArrow={
      <button className="absolute left-4 top-1/2 -translate-y-1/2 
        bg-white/70 hover:bg-white 
        w-10 h-10 flex items-center justify-center 
        rounded-full shadow-lg text-xl z-10">
        🡨
      </button>
    }
    nextArrow={
      <button className="absolute right-4 top-1/2 -translate-y-1/2 
        bg-white/70 hover:bg-white 
        w-10 h-10 flex items-center justify-center 
        rounded-full shadow-lg text-xl z-10">
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
      <div key={index} className="w-full h-[900px]">
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
        <div className="flex justify-center gap-4 sm:gap-8 text-gray-600 mb-6 flex-wrap">
          {/* Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left min-w-[80px]">
            <span className="text-yellow-500 text-lg sm:mr-2">⭐</span>
            <div className="flex flex-col sm:flex-row items-center">
              <span className="text-sm md:text-base font-semibold">5</span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="mb-12">
          <div className="text-4xl font-bold mb-6">
            <h2 className="bg-gradient-to-r from-red-500 to-green-900 bg-clip-text text-transparent"> Quick Highlights {""}</h2>

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
          </div>
        </div>

        {/* Itinerary & Pricing Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Itinerary & Pricing</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">


            {/* Standard */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Standard</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">
                  $2,499
                </div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>

            {/* Deluxe */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Deluxe</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">
                  $3,199
                </div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>

            {/* Private */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Private</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">
                  $3,999
                </div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-14">
          <div className="text-center mb-12">
            <div className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent">
                What Our {""}
              </span>

              <span className="bg-gradient-to-r from-orange-800 to-green-800 bg-clip-text text-transparent">
                Trekkers {""}
              </span>

              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent">
                Say
              </span>
            </div>
            <p className=" text-gray-700 max-w-2xl mx-auto mb-4"> Real experiences from adventures who have explored the HImalayas with us.

            </p>
          </div>



          {/* Testimonials */}
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 items-stretch">

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex flex-col flex-1 min-w-[300px]">

              <div className="flex gap-0.5 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto italic mb-4 flex-grow">
                "When my wife and I decided to go to Nepal for our honeymoon, we wanted something different—an adventure that we would never forget. Advensa Travel curated the perfect itinerary for..."

              </p>
              <div className="mt-auto">
                <p className="text-red-600 font-semibold text-sm  mb-4"> Everest Base Camp</p>
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">


                    <img
                      src="/img1.jpg"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover"
                    />


                  </div>


                  <div>
                    <p className="font-semibold text-gray-800">Farzad Mesri

                    </p>
                    <p className="text-gray-600 text-sm">Australia</p>
                  </div>
                </div>
              </div>


            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex flex-col flex-1 min-w-[300px]">

              <div className="flex gap-0.5 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto italic mb-4 flex-grow">
                "Nepal had been on my travel bucket list for years, and Advensa Travel made the entire experience even more magical than I had imagined. From the moment I landed in..."

              </p>
              <div className="mt-auto">
                <p className="text-red-600 font-semibold text-sm  mb-4"> Everest Base Camp</p>
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">


                    <img
                      src="/img1.jpg"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover"
                    />


                  </div>


                  <div>
                    <p className="font-semibold text-gray-800">
                      Larissa Rodrigues</p>
                    <p className="text-gray-600 text-sm">Brazil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex flex-col flex-1 min-w-[300px]">

              <div className="flex gap-0.5 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto italic mb-4 flex-grow">
                "The Annapurna Circuit trek with Advensa Travel was the adventure of a lifetime! Every detail, from the permits to the accommodations, was taken care of, allowing me to focus on..."


              </p>
              <div className="mt-auto">
                <p className="text-red-600 font-semibold text-sm  mb-4"> Annapurna Circuit</p>
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">


                    <img
                      src="/img1.jpg"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover"
                    />


                  </div>


                  <div>
                    <p className="font-semibold text-gray-800">Sawlena Garcia</p>
                    <p className="text-gray-600 text-sm">USA

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center mt-10">
            <button className="px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200"> View All Reviews</button>
          </div>




        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center ">
            <h2 className="text-3xl font-bold mb-4">
              Start Planning Your Trip Today
            </h2>
            <button className="px-12 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="mb-14">
          <div className="text-center mb-12">
            <div className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent">
                Start Your {""}
              </span>

              <span className="bg-gradient-to-r from-orange-800 to-green-800 bg-clip-text text-transparent">
                Adventure {""}
              </span>

              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent">
                Today
              </span>
            </div>
            <p className=" text-gray-700 max-w-2xl mx-auto mb-4">   Ready to explore the Himalayas? Contact us for a free consultation and let's plan your perfect trek.

            </p>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              {/* Phone */}
              <div className="bg-white backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer">

                {/* <div className="text-center"> */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-white/30 shadow-lg">

                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h4 className="text-l font-bold text-gray-800 mb-2">+610430046850</h4>
                <p className="text-gray-600 text-sm">24/7 Support</p>
                {/* </div> */}
              </div>

              {/* Email */}
              <div className="bg-white backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer">

                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-white/30 shadow-lg">

                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h4 className="text-l font-bold text-gray-800 mb-2">info@advensatravel.com</h4>
                <p className="text-gray-600 text-sm">Quick Response</p>
              </div>


              {/* Address */}
              <div className="bg-white backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer">

                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-white/30 shadow-lg">

                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h4 className="text-l font-bold text-gray-800 mb-2">
                  604a Victoria Rd, Ermington NSW 2115</h4>
                <p className="text-gray-600 text-sm">
                  Australia

                </p>
              </div>


              {/* Office Hours */}
              <div className="bg-white backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-2">


                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                  </svg>

                  <h4 className="text-l font-bold text-gray-800">Office Hours</h4>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center ">
                    <span className="text-sm text-gray-800">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-800">Sunday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-800">Saturday</span>
                    <span className="text-gray-600">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form className="space-y-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className=" mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 "
                    placeholder="+61 234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Trek</label>
                  <input
                    type="tel"
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 "
                    placeholder="Everest base Camp"
                  />

                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full text-sm px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200  resize-none"
                    placeholder="Tell us about your trekking plans, preferred dates, group size, or any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>



      </div>
    </section>




  );
}
