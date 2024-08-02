import { Link } from "react-router-dom";
import { CiMail, CiPhone } from "react-icons/ci";
import Logo from "../../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#363636] p-10 text-white">
            <div className="container px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <aside className="flex flex-col items-center md:items-start">
                        <img src={Logo} className="w-32 mb-4" alt="Company Logo" />
                    </aside>
                    <nav className="flex flex-col">
                            <Link to="/" className="link link-hover mb-2">Como Funciona?</Link>
                            <Link to="/" className="link link-hover mb-2">Termos de Serviço</Link>
                            <Link to="/" className="link link-hover mb-2">Política de Privacidade</Link>
                            <Link to="/" className="link link-hover">Una-se a Nossa Equipe</Link>
                        </nav>
                    
                    <nav className="flex flex-col">
                        <h1 className="footer-title text-[#D6B8FF] text-lg mb-4">Para Freelancer</h1>
                        <Link to="/about" className="link link-hover mb-2">Projetos</Link>
                        <Link to="/contact" className="link link-hover mb-2">Contato</Link>
                        <Link to="/frequentlyAsked" className="link link-hover">F.A.Q</Link>
                    </nav>
                    <nav className="flex flex-col">
                        <h1 className="footer-title text-[#D6B8FF] text-lg mb-4">Para Clientes</h1>
                        <Link to="/about" className="link link-hover mb-2">Freelancers</Link>
                        <Link to="/contact" className="link link-hover mb-2">F.A.Q</Link>
                    </nav>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm">&copy; {new Date().getFullYear()} TuyaFreela. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
