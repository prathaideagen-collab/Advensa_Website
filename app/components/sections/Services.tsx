"use client";

export default function Services() {
  return (
    <section
      id="services"
      className=" flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-green-100 text-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        

{/* Quick Highlights Section */}
        
          <div className="font-bold mb-10">
            <h2 className="text-5xl bg-gradient-to-r from-red-500 to-green-800 bg-clip-text text-transparent">
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
          </div>

        {/* Itinerary & Pricing Section */}
       
          <h2 className="text-5xl font-bold mt-20 mb-10">
            <span className="bg-gradient-to-r from-red-500 to-orange-900 bg-clip-text text-transparent font-bold">
              Itinerary{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-900 to-green-700 bg-clip-text text-transparent font-bold">
              & Pricing
            </span>
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
            {/* Standard */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Standard</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$2,499</div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>
            {/* Deluxe */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Deluxe</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$3,199</div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>
            {/* Private */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg flex-1 min-w-[250px] flex justify-center">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Private</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$3,999</div>
                <button className="px-8 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center gap-2">
                  Enquire now
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}
