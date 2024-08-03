import Footer2 from "../components/Footer/footer2";
import mailImg from "../assets/inbox-min.png";
import arrow from "../assets/arrow-min.png";
import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <img src={mailImg} alt="" />
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Cheque seu email</h1>
          <p>Enviamos um email para bzinak@gmail.com</p>
          <p>com instruções para redefinir sua senha.</p>
        </div>
        <Link to={"/"} className="flex items-center text-[#D6B8FF] space-x-2">
          <img src={arrow} alt="" />
          <h1>Voltar a Home</h1>
        </Link>
      </div>
      <Footer2 />
    </div>
  );
};

export default EmailVerification;
