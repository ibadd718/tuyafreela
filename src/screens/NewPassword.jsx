import React from "react";
import Footer2 from "../components/Footer/footer2";

const NewPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="p-8">
          <h1 className="text-2xl w-full font-bold mb-6 text-center">
            Crie sua nova senha!
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="password"
                placeholder="******"
                className="w-80 bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm password"
                className="w-80 bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
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

export default NewPassword;
