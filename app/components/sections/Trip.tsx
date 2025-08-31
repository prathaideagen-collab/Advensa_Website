"use client";

export default function Trip() {
  return (
    <section className=" flex items-center justify-center px-4 py-20 bg-[#DEEFF9] text-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Contact Section */}
       
          <div className="py-15 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
            <h2 className="text-5xl font-bold mb-4 pb-10">
              <span className="bg-gradient-to-r from-red-600 to-orange-900 bg-clip-text text-transparent">
                Start Planning{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-800 to-green-800 bg-clip-text text-transparent">
                Your{" "}
              </span>
              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent">
                Trip Today
              </span>
            </h2>
            <button className="px-12 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200">
              Enquire Now
            </button>
          </div>
        </div>
    
    </section>
  );
}
