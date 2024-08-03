import Footer2 from "../components/Footer/footer2";
import mailImg from "../assets/inbox-min.png";
import arrow from "../assets/arrow-min.png";
import { Link } from "react-router-dom";

const EmailConfirmation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <img src={mailImg} alt="" />
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Obrigado por confirmar seu cadastro
          </h1>
          <p>Agora já pode continuar seu cadastro</p>
        </div>
        <button className="bg-[#D6B8FF] text-white px-16 py-3 text-xl rounded-sm transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
          Entrar
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default EmailConfirmation;
