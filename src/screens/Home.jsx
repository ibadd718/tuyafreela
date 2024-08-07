import React from "react";
import Hero from "../assets/Hero.jpg";
import Hero2 from "../assets/Hero2.png";
import ComoPic1 from "../assets/Como funciona1.png";
import ComoPic2 from "../assets/Como funciona2.png";
import ComoPic3 from "../assets/Como funciona3.png";
import ComoPic4 from "../assets/Como funciona4.png";
import Caminho1 from "../assets/Caminho1.png";
import Caminho2 from "../assets/Caminho2.png";
import Caminho3 from "../assets/Caminho3.png";
import forcard1 from "../assets/forcard1.png";
import retangulo1 from "../assets/Retângulo 41 (4)-min.png";
import retangulo2 from "../assets/Retângulo 41-min.png";
import retangulo3 from "../assets/Retângulo 41 (1)-min.png";
import retangulo4 from "../assets/Retângulo 41 (2)-min.png";
import retangulo5 from "../assets/Retângulo 40-min.png";
import retangulo6 from "../assets/Retângulo 41 (3)-min.png";

import pfp from "../assets/pfp.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const Card = ({ image, altText, heading }) => (
    <div className="bg-[#F6F6F6] flex flex-col justify-center  overflow-hidden text-center">
      <img src={image} alt={altText} className="" />
      <h2 className="mt-4 mb-4 text-xl ">{heading}</h2>
    </div>
  );

  const images = [
    { src: retangulo2, alt: "Grupo 123", heading: "Renove seu site" },
    { src: retangulo3, alt: "Grupo 124", heading: "Lance seu App Mobile" },
    { src: retangulo4, alt: "Grupo 125", heading: "Crie sua Id. Visual" },
    { src: retangulo1, alt: "Grupo 122", heading: "Tradutores/Escritores" },
    { src: retangulo6, alt: "Grupo 139", heading: "Marketing e Vendas" },
    { src: retangulo5, alt: "Grupo 126", heading: "E muito mais!" },
  ];

  return (
    <div>
      <div className="relative">
        {/* Hero Image */}
        <img src={Hero} className="object-cover w-full h-auto" alt="" />

        {/* Overlay */}
        <div className="absolute inset-0 w-2/4 bg-black bg-opacity-50 z-10 flex items-center justify-center px-4 md:px-8">
          <h1 className="text-white text-xl md:text-2xl lg:text-5xl xl:text-6xl tracking-wide text-left md:text-left p-4">
            Contrate freelancers <strong>especializados para qualquer</strong>{" "}
            trabalho, online.
          </h1>
        </div>
      </div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold mt-12 md:mt-16 px-4">
        Como funciona?
      </h1>

      <div className="container mx-auto px-4 mt-8 md:mt-16">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
          <div className="flex mb-12 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 justify-center">
            <button className="bg-[#D6B8FF] text-xl font-semibold text-white p-5 rounded-sm transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
              PUBLIQUE UM PROJETO
            </button>
            <button className="bg-[#6C7A89] text-xl font-semibold text-white p-5 rounded-sm transition-transform transform hover:scale-105 hover:bg-[#5a6a75]">
              TRABALHE COMO FREELA
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div
          id="third-container"
          className="w-full bg-white py-2 mx-auto  relative z-20  sm:top-10 mt-10"
        >
          <div className="relative flex flex-col w-full md:mt-10 z-10">
            <div className="ml-0 md:ml-10 text-center md:text-left relative z-10">
              <div className="relative right-1/4 z-0 block xl:hidden">
                <img
                  src={Hero2}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-4xl w-full md:w-2/3 mt-8">
                Torne-se um profissional{" "}
                <div>
                  {" "}
                  digital.{" "}
                  <span className="font-bold">Torne-se um freelancer.</span>
                </div>
              </h1>
              <p className="mt-4  text-sm md:text-base md:w-2/5">
                Você pode melhorar a sua presença na web, vender online, vender
                nas redes sociais, criar conteúdos que mantenham seus clientes
                interessados ​​na sua marca e muito mais!
              </p>
              <button className="bg-[#D6B8FF] text-white p-3 rounded-md mt-4 text-sm sm:text-base transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
                COMEÇE SUA JORNADA!
              </button>
            </div>
            <div
              id="hero-div"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block z-0"
            >
              <div className="relative">
                <img
                  id="hero-Img"
                  className="hero-image w-full h-full object-cover"
                  src={Hero2}
                  alt="Hero Image"
                />
                <div
                  id="heroImage-div"
                  className="absolute inset-0 ml-[46%] top-0 mt-0 bg-gradient-to-l from-transparent to-white w-[40%]"
                ></div>
              </div>
            </div>
          </div>

          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mb-10 font-semibold mt-10 md:mt-20 lg:mt-52">
            Acompanhe nossos resultados!
          </h1>

          {/* Flex container for responsiveness */}
          <div className="flex flex-col pb-10 pt-6  gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Image Container */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={Caminho1}
                  alt="Step 1"
                  className="w-40 h-40 sm:w-42 sm:h-42 object-fit mb-4"
                />
                <h2 className="text-4xl sm:text-6xl font-bold">2.200</h2>
                <p className="text-gray-600 text-lg">Freelancers</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src={Caminho2}
                  alt="Step 2"
                  className="w-40 h-40 sm:w-42 sm:h-42 object-fit mb-4"
                />
                <h2 className="text-4xl sm:text-6xl font-bold">2.200</h2>
                <p className="text-gray-600 text-lg">Projeto Mensal</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src={Caminho3}
                  alt="Step 3"
                  className="w-40 h-40 sm:w-42 sm:h-42 object-fit mb-4"
                />
                <h2 className="text-4xl sm:text-6xl font-bold">2.200</h2>
                <p className="text-gray-600 text-lg">Usuários Online</p>
              </div>
            </div>
            <div className="flex mx-4 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 justify-center">
              <button className="bg-[#D6B8FF] text-xl font-semibold text-white p-5 rounded-sm transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
                PUBLIQUE UM PROJETO
              </button>
              <button className="bg-[#6C7A89] text-xl font-semibold text-white p-5 rounded-sm transition-transform transform hover:scale-105 hover:bg-[#5a6a75]">
                TRABALHE COMO FREELA
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 lg:mt-40">
          <div className="flex justify-center">
            <h1 className="text-4xl mx-2 mt-10 mb-16  text-center">
              Milhares de pessoas acreditam em nossos
              <div>
                <span className="font-bold tracking-wide text-[#d6b8ff]">
                  FREELANCES
                </span>
              </div>
            </h1>
          </div>
        </div>

        <div className="bg-white w-[91%] relative py-20 px-10 mx-auto">
          <div className="flex justify-center space-x-5 items-center">
            <img
              className="absolute top-[-40px] right-[40px]"
              src={forcard1}
              alt=""
            />
          </div>
          <Carousel
            autoPlay="true"
            axis="horizontal"
            verticalSwipe="standard"
            showIndicators="false"
            interval={2000}
            infiniteLoop="true"
            showThumbs="false"
          >
            <div className="flex flex-col md:flex-row items-center absolute">
              <div className="w-2/4 md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <div className="p-4 md:p-8 w-full md:w-4/5 ">
                <p className="text-base md:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="mt:4 md:mt-1 text-start font-semibold text-xl text-[#D6B8FF]">
                  Eduardo Lopes - Realtech Produções
                </div>
              </div>
            </div>
            <div className="flex flex-col      md:flex-row items-center">
              <div className="w-2/4 md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <div className="p-4 md:p-8 w-full md:w-4/5 ">
                <p className="text-base md:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="mt:4 md:mt-1 text-start font-semibold text-xl text-[#D6B8FF]">
                  Eduardo Lopes - Realtech Produções
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-2/4 md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <div className="p-4 md:p-8 w-full md:w-4/5 ">
                <p className="text-base md:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="mt:4 md:mt-1 text-start font-semibold text-xl text-[#D6B8FF]">
                  Eduardo Lopes - Realtech Produções
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="mt-20 bg-white">
        <div className=" py-20 px-10 ">
          <h1 className="text-4xl mt-5 mb-20 text-center">
            Não deixe para amanhã, o que pode fazer HOJE!
            <div>
              <span className="font-bold tracking-wide text-[#d6b8ff]">
                Coloque suas ideias em prática
              </span>
            </div>
          </h1>
          <div className="w-[100%] gap-5 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
            {images.map((image, index) => (
              <Card
                key={index}
                image={image.src}
                altText={image.alt}
                heading={image.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
