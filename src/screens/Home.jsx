import React from "react";
import Hero from "../assets/Hero.jpg";
import ComoPic1 from "../assets/Como funciona1.png";
import ComoPic2 from "../assets/Como funciona2.png";
import ComoPic3 from "../assets/Como funciona3.png";
import ComoPic4 from "../assets/Como funciona4.png";
const Home = () => {
  return (
    <div>
      <div>
        <img src={Hero} className="object-fit" alt="" />
      </div>
      <div className="container mx-auto px-4 mt-20">
        {/* Flex container for responsiveness */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image Container */}
            <div className="flex flex-col items-center">
              <img
                src={ComoPic1}
                alt="Step 1"
                className="w-[120px] h-[120px] object-cover mb-4"
              />
              <h1 className="text-xl font-semibold text-center">
                Publique o projeto
              </h1>
              <p className="text-gray-600 text-center">
                Conte-nos em poucas palavras o que você precisa. É grátis e sem
                compromisso!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={ComoPic2}
                alt="Step 2"
                className="w-[120px] h-[120px] object-cover mb-4"
              />
              <h1 className="text-xl font-semibold text-center">
                Selecione o Profissional
              </h1>
              <p className="text-gray-600 text-center">
                Receba propostas de excelentes freelancers. Escolha o melhor
                para o seu projeto.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={ComoPic3}
                alt="Step 3"
                className="w-[120px] h-[120px] object-cover mb-4"
              />
              <h1 className="text-xl font-semibold text-center">
                Faça o pagamento
              </h1>
              <p className="text-gray-600 text-center">
                Você faz o pagamento com total garantia sobre o valor depositado
                e já começa a trabalhar :)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={ComoPic4}
                alt="Step 4"
                className="w-[120px] h-[120px] object-cover mb-4"
              />
              <h1 className="text-xl font-semibold text-center">Aceitar</h1>
              <p className="text-gray-600 text-center">
                Receba o projeto concluído e libere o valor depositado ao
                freelancer.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-8 justify-center">
            <button className="bg-[#D6B8FF] text-white p-3 rounded-sm">
              PUBLIQUE UM PROJETO
            </button>
            <button className="bg-[#6C7A89] text-white p-3 rounded-sm">
              TRABALHE COMO FREELA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
