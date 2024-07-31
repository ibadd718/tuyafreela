import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#363636]">
      <div className="flex justify-between items-center py-2 px-4 lg:px-10">
        <div className="flex items-center space-x-10">
          <Link to={"/"}>
            <img className="w-64" src={Logo} alt="Logo" />
          </Link>
          <div className="relative hidden lg:block">
            <input
              className=" py-3 pl-5 pr-20 w-full border rounded"
              placeholder="Buscar por profissionais"
              type="text"
            />
            <CiSearch className="absolute right-3 size-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4 text-[#FFFFFF]">
          <Link to="/como">Como Funciona?</Link>
          <Link to="/cadastre-se">Cadastre-se</Link>
          <Link to="/entrar">Entrar</Link>
          <button className="bg-[#D6B8FF] text-white p-3 rounded-sm">
            PUBLIQUE UM PROJETO
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#363636] py-2">
          <div className="flex flex-col items-start space-y-2 px-4">
            <input
              className="px-4 py-3 pl-10 pr-10 w-full border rounded"
              placeholder="Buscar por profissionais"
              type="text"
            />
            <Link to="/como" className="text-white">
              Como Funciona?
            </Link>
            <Link to="/cada" className="text-white">
              Cadastre-se
            </Link>
            <Link to="/entrar" className="text-white">
              Entrar
            </Link>
            <Link className="bg-[#D6B8FF] text-white p-3 rounded-sm">
              PUBLIQUE UM PROJETO
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
