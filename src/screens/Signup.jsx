import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer/footer2";

const Signup = () => {
  const [role, setRole] = useState("cliente");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-center items-center mt-10 md:mt-28 bg-gray-100">
          <div className="p-8 w-96">
            <h1 className="text-2xl mb-6 text-center">
              Bem-vindo ao <span className="font-bold">TugaFreela</span>
            </h1>
            <div className="flex justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="cliente"
                  checked={role === "cliente"}
                  onChange={() => setRole("cliente")}
                  className="mr-2"
                />
                Cliente
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="freelancer"
                  checked={role === "freelancer"}
                  onChange={() => setRole("freelancer")}
                  className="mr-2"
                />
                Freelancer
              </label>
            </div>
            <form>
              <div className="flex space-x-2">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Apelido"
                    className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="NIF"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Confirmar e-mail"
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                />
              </div>
              <div className="flex space-x-2">
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>
                  Aceito os{" "}
                  <a href="#" className="text-blue-500">
                    Termos de Serviço
                  </a>
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md"
              >
                Cadastrar
              </button>
            </form>
            <p className="text-center text-xs mt-2">
              New user?{" "}
              <Link className="text-[#D6B8FF] underline" to={"/createAccount"}>
                Create a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Signup;
