import React from "react";
import Footer2 from "../components/Footer/footer2";

const Forget = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="p-8">
          <h1 className="text-xl font-bold mb-6 text-center">
            Esqueceu a senha?{" "}
            <div className="w-full"> Não tem problema. Nós te ajudamos!</div>
          </h1>
          <form>
            <div className="mb-4">
              <p className="text-center mb-2 text-[#717171]">
                Insira o email de registro
              </p>
              <input
                type="text"
                placeholder="user90876@gmail.com"
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Forget;
