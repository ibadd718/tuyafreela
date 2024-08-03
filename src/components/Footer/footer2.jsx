import { Link } from "react-router-dom";
import { CiMail, CiPhone } from "react-icons/ci";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-200 p-10 relative bottom-0 text-black">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        @2020-2021 TugaFreela. Todos os direitos reservados.Termos de uso |
        Política de privacidade
      </div>
    </footer>
  );
};

export default Footer;
