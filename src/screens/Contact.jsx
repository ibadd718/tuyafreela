import React from "react";
import bannerGirl from "../assets/bannergirl-min.png";
import contactShape from "../assets/contactShape-min.png";
import contactGirl from "../assets/contactGirl-min.png";
import circle from "../assets/circle-min.png";

const Contact = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="relative w-full h-60 md:h-96 overflow-hidden bg-gradient-to-r from-[#532073] to-purple-[#aa5dcd]">
        {/* This image is always visible on small screens and hidden on large screens */}
        <div className="absolute inset-0 flex justify-center items-center lg:hidden">
          <img id="bannerGirl2" className="w-2/5" src={bannerGirl} alt="" />
        </div>

        {/* Hide this bannerGirl image on tablets and phones */}
        <img
          src={bannerGirl}
          alt="banner girl"
          className="hidden lg:block absolute top-5 left-2/3 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:top-20 w-2/4 md:w-1/2 lg:w-1/4 z-10"
        />

        {/* Hide shapes on tablets and phones */}
        <img
          src={contactShape}
          alt="shape"
          className="hidden md:hidden lg:block absolute left-4 top-4 lg:left-10 lg:top-10 w-12 lg:w-16 z-10"
        />
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
          <img
            src={contactShape}
            id="contactShape2"
            alt="shape"
            className="w-12 lg:w-16 z-10"
          />
        </div>
      </div>
      <img
        className="w-10 relative left-10  top-[-20px] z-50"
        src={circle}
        alt=""
      />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4">
        <div className="flex-1 md:w-2/4 py-8">
          <h1 className="text-3xl md:text-4xl border-l-8 pl-3 border-[#D6B8FF] font-semibold my-4 md:w-2/4">
            Entre em contato conosco!
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu Nome"
                className="w-full px-4 py-2 text-black bg-[#EFEFEF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
                className="w-full px-4 py-2 text-black bg-[#EFEFEF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="Seu WhatsApp"
                className="w-full px-4 py-2 text-black bg-[#EFEFEF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sua Mensagem"
                rows="4"
                className="w-full px-4 py-2 text-black bg-[#EFEFEF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              ></textarea>
            </div>

            <div className="flex ">
              <button className="bg-[#D6B8FF] font-semibold text-white py-3 px-16 text-xl transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0 md:ml-6">
          <img
            src={contactGirl}
            alt="contact girl"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
