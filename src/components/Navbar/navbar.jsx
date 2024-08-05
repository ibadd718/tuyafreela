import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#363636]">
      <div className="flex justify-between items-center py-2 px-4 lg:px-6">
        {" "}
        {/* Adjusted padding */}
        <div className="flex items-center space-x-6">
          {" "}
          {/* Reduced space-x */}
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
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Click < RiArrowDropDownLine size={40} />
            </div>
            <ul tabIndex={0} className="dropdown-content relative z-50	 menu bg-base-100 rounded-box z-[1] text-black w-52 p-2 shadow">
              <Link className="hover:text-[#D6B8FF]" to="/">
                Home
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/faq">
                FAQ
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/privacy&policy">
                Privacy Policy
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/login">
                Login
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/signup">
                Signup
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/verification">
                Email Verification
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/confirmation">
                Email Confirmation
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/forget">
                Forgot Password
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/functiona">
                Como Funciona?
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/prefilPage">
                Prefill Page
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/freelancerForm">
                Freelancer Form
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/passwordreset">
                Reset Password
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/terms">
                Terms and Conditions
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/contact">
                Contact
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/cada">
                Cada
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="/entar">
                Entrar
              </Link>

              <Link className="hover:text-[#D6B8FF]" to="*">
                Not Found
              </Link>

            </ul>
          </div>
          <Link className="hover:text-[#D6B8FF]" to="/functiona">
            Como Funciona?
          </Link>
          <Link className="hover:text-[#D6B8FF]" to="/cadastre-se">
            Cadastre-se
          </Link>
          
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
            <Link to="/como" className="hover:text-[#D6B8FF] text-white">
              Como Funciona?
            </Link>
            <Link to="/cada" className="hover:text-[#D6B8FF] text-white">
              Cadastre-se
            </Link>
            <Link to="/entrar" className="hover:text-[#D6B8FF] text-white">
              Entrar
            </Link>
            <Link className="bg-[#D6B8FF] text-white p-3 rounded-sm mt-4 text-sm sm:text-base transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
              PUBLIQUE UM PROJETO
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
