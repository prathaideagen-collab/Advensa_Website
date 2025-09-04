"use client";

export default function Trekkers() {
    return (
    <section className=" flex items-center justify-center px-4 py-10 bg-[#D0E9F6] text-black">

      <div className="max-w-6xl mx-auto w-full">
        
  {/* Testimonials Section */}
        
          <div className="text-center mb-12">
            <div className="text-5xl font-bold mb-6">
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
                      src="/trek1.png"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover object-center"
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
                      src="/trek2.png"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover object-center" 
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
                      src="/trek3.png"
                      alt="Farzad Mesri"
                      className="w-full h-full object-cover object-center"
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
            <a href="https://www.google.com/search?sca_esv=e2d404020a096c28&sxsrf=AE3TifPrGaPzQNw1h53HJPIEOtN1mAurgQ:1756551029727&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EykOy1OYJxQ0zC9848IqiGe33Lw78nS6HAmlg-i_fDC2OKUg7Fx3zfiH2fcRlwV9U9PlgNqGtx-dm6jQjTiuyxdqrmaQ&q=Advensa+Travel+Reviews&sa=X&ved=2ahUKEwi8oqDBrrKPAxWUzDgGHe3-D7YQ0bkNegQIIxAE&biw=1536&bih=791&dpr=1.25">
            <button className="px-12 py-4 bg-gradient-to-b from-red-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200"> View All Reviews</button>
          </a>
          </div>




        </div>
        

    </section>
  );
}
