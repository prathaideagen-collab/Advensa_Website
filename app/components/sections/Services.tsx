"use client";

export default function Services() {
  return (
    <section
      id="services"
      className=" flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-green-100 text-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        

{/* Quick Highlights Section */}
        
          <div className="font-bold mb-15">
            <h2 className="text-5xl bg-gradient-to-r from-red-500 to-green-800 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent font-bold">
               <span className=" bg-amber-300 bg-clip-text text-transparent"> 🌟</span> Quick{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-900 to-green-700 bg-clip-text text-transparent font-bold">
                Highlights
              </span>
            </h2>
          </div>
<div className="grid grid-cols-2 gap-7">
  
  <div className="flex items-start gap-3">
    <span className="text-sm md:text-base">
      ⛰️ <span className="font-bold">Trek with the Best</span> – World-class Sherpas leading every step.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <span className="text-sm md:text-base whitespace-nowrap">
      🛎️ <span className="font-bold">All-Inclusive Peace of Mind</span> – Meals, hotels, permits, visa, insurance & more.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <span className="text-sm md:text-base">
      🗓️ <span className="font-bold">Your Dates, Your Journey</span> – Flexible departures, your schedule.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <span className="text-sm md:text-base whitespace-nowrap">
      💯 <span className="font-bold">100% Trusted Company</span> – We deliver on promises and make your dreams real.
    </span>
  </div>
</div>


        {/* Itinerary & Pricing Section */}
       
          <h2 className="text-5xl font-bold mt-30 mb-10">
            <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent font-bold">
              Itinerary{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-900 to-green-700 bg-clip-text text-transparent font-bold">
              & Pricing
            </span>
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
            {/* Deluxe */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-7 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <a href="https://advensatravel.com/package/14-days-everest-base-camp-trek-deluxe">
                <h3 className="font-bold text-xl mb-2">Deluxe</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">AUD 2900</div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
                </a>
              </div>
            </div>
            {/* Luxury */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-7 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">Luxury</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">AUD 5584</div>
                <a href="https://advensatravel.com/package/16-days-everest-base-camp-trek-luxury">
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
                </a>
              </div>
            </div>
            {/* elite */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-7 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <a href="https://advensatravel.com/package/16-days-everest-base-camp-trekelite-service">
                <h3 className="font-bold text-xl mb-2">Elite</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">AUD 7280</div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}
