import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer/footer2";

const PrefillNo = () => {
  const [role, setRole] = useState("cliente");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="p-8 w-96">
          <h1 className="text-2xl mb-6 text-center">
            Complete seu perfil no <span className="font-bold">TugaFreela</span>
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Morada"
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>
            <div className="flex space-x-2">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Número"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Andar"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Código Postal"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Data de nascimento"
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Telemóvel"
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default PrefillNo;
