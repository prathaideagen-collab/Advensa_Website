"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    trek: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      reply_to: formData.user_email, //  visitor's email
    };

    emailjs
      .send(
        "service_5nx1o9a",
        "template_6h48wbj",
        templateParams,
        "-YSVUSfcHoUwhl_Oi"
      )
      .then(
        () => {
          alert(" Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            trek: "",
            message: "",
          });
        },
        (error) => {
          alert(" Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-50 via-blue-100 to-green-100 text-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-14">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-900 bg-clip-text text-transparent">
                Start Your{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-800 to-green-800 bg-clip-text text-transparent">
                Adventure{" "}
              </span>
              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className=" text-gray-700 max-w-2xl mx-auto mb-4">
              Ready to explore the Himalayas? Contact us for a free consultation
              and let's plan your perfect trek.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h3>

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
                <h4 className="text-l font-bold text-gray-800 mb-2">
                  <a href="mailto:info@advensatravel.com" className="hover:text-red-600 transition-colors">
                    info@advensatravel.com
                  </a>
                </h4>
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
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={sendEmail} className="space-y-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 
             focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 
             focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 
             focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200"
                    placeholder="+61 234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interested Trek
                  </label>
                  <input
                    type="text"
                    name="trek"
                    value={formData.trek}
                    onChange={handleChange}
                    className="mb-3 text-sm w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 
             focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200"
                    placeholder="Everest Base Camp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full text-sm px-4 py-3 rounded-2xl bg-gray-100 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all duration-200 resize-none"
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
