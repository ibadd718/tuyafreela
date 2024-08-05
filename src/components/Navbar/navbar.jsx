import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#363636]">
      <div className="flex justify-between items-center py-2 px-4 lg:px-6">
        <div className="flex items-center space-x-6">
          <Link to={"/"}>
            <img className="w-64" src={Logo} alt="Logo" />
          </Link>
          <div className="relative hidden lg:block">
            <input
              className="py-3 pl-5 pr-20 w-full border rounded"
              placeholder="Buscar por profissionais"
              type="text"
            />
            <CiSearch className="absolute right-3 size-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-8 text-[#FFFFFF]">
          <Link
            className={`hover:text-[#D6B8FF] ${isActive("/functiona") ? "text-[#D6B8FF]"  : ""}`}
            to="/functiona"
          >
            Como Funciona?
          </Link>
          <Link
            className={`hover:text-[#D6B8FF] ${isActive("/signup") ? "text-[#D6B8FF]"  : ""}`}
            to="/signup"
          >
            Cadastre-se
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center border-none bg-transparent text-white focus:outline-none"
            >
              My Profile <RiArrowDropDownLine size={40} />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-base-100 rounded-box text-black w-52 p-2 shadow z-50">
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/login") ? "text-[#D6B8FF]"  : ""}`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/signup") ? "text-[#D6B8FF]"  : ""}`}
                    to="/signup"
                  >
                    Cadastre-se
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/prefilPage") ? "text-[#D6B8FF]"  : ""}`}
                    to="/prefilPage"
                  >
                    Prefill Page
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/forget") ? "text-[#D6B8FF]"  : ""}`}
                    to="/forget"
                  >
                    Forgot Password
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/freelancerForm") ? "text-[#D6B8FF]"  : ""}`}
                    to="/freelancerForm"
                  >
                    Freelancer Form
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/passwordreset") ? "text-[#D6B8FF]"  : ""}`}
                    to="/passwordreset"
                  >
                    Reset Password
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/verification") ? "text-[#D6B8FF]"  : ""}`}
                    to="/verification"
                  >
                    Email Verification
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/confirmation") ? "text-[#D6B8FF]"  : ""}`}
                    to="/confirmation"
                  >
                    Email Confirmation
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="bg-[#D6B8FF] text-white p-3 rounded-sm transition-transform transform hover:scale-105 hover:bg-[#B09CFF]"
          >
            PUBLIQUE UM PROJETO
          </Link>
        </div>
        <div className="lg:hidden text-white flex items-center">
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
            <Link
              to="/como"
              className={`hover:text-[#D6B8FF] text-white ${isActive("/como") ? "text-[#D6B8FF]" : ""}`}
            >
              Como Funciona?
            </Link>
            <Link
              to="/cada"
              className={`hover:text-[#D6B8FF] text-white ${isActive("/cada") ? "text-[#D6B8FF]" : ""}`}
            >
              Cadastre-se
            </Link>
            <Link
              to="/signup"
              className={`hover:text-[#D6B8FF] text-white ${isActive("/entrar") ? "text-[#D6B8FF]" : ""}`}
            >
              Entrar
            </Link>

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center border-none bg-transparent text-white mt-4"
            >
              My Profile <RiArrowDropDownLine size={30} />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 bg-base-100 rounded-box text-black w-full p-2 shadow">
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/login") ? "text-[#D6B8FF]"  : ""}`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/signup") ? "text-[#D6B8FF]"  : ""}`}
                    to="/signup"
                  >
                    Cadastre-se
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/prefilPage") ? "text-[#D6B8FF]"  : ""}`}
                    to="/prefilPage"
                  >
                    Prefill Page
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/forget") ? "text-[#D6B8FF]"  : ""}`}
                    to="/forget"
                  >
                    Forgot Password
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/freelancerForm") ? "text-[#D6B8FF]"  : ""}`}
                    to="/freelancerForm"
                  >
                    Freelancer Form
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/passwordreset") ? "text-[#D6B8FF]"  : ""}`}
                    to="/passwordreset"
                  >
                    Reset Password
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/verification") ? "text-[#D6B8FF]"  : ""}`}
                    to="/verification"
                  >
                    Email Verification
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={`block ml-2 hover:text-[#D6B8FF] ${isActive("/confirmation") ? "text-[#D6B8FF]"  : ""}`}
                    to="/confirmation"
                  >
                    Email Confirmation
                  </Link>
                </li>
              </ul>
            )}
            <Link
              className="bg-[#D6B8FF] text-white p-3 rounded-sm mt-4 text-sm sm:text-base transition-transform transform hover:scale-105 hover:bg-[#B09CFF]"
              to="/"
            >
              PUBLIQUE UM PROJETO
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
