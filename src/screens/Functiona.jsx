import contactShape from "../assets/contactShape-min.png";
import bannerGirl from "../assets/functionaGirl-min.png";
import circle from "../assets/circle-min.png";
import functiona1 from "../assets/functiona1-min.png";
import functiona2 from "../assets/functiona2-min.png";
import functiona3 from "../assets/functiona3.png";
import functiona4 from "../assets/functiona4.png";
import freelas from "../assets/freelas2-min.png";
import line1 from "../assets/line1.png";
import line2 from "../assets/line2.png";
import line3 from "../assets/line3.png";
import pfp from "../assets/pfp.png";
import moreMin from "../assets/more-min.png";
import seoAndWebMin from "../assets/seo-and-web-min.png";
import quickMobileOptionsMin from "../assets/004---Quick-Mobile-Options-min.png";
import vectorMin from "../assets/Vector-min.png";
import newsMin from "../assets/news-min.png";
import aimMin from "../assets/aim-min.png";
import curve1 from "../assets/curve1.png";
import curve2 from "../assets/curve2.png";
import curve3 from "../assets/curve3.png";
import curve4 from "../assets/curve4.png";

import { Carousel } from "react-responsive-carousel";

const Functiona = () => {
  return (
    <div className="relative w-full bg-white h-auto">
      <div className="relative w-full h-72 md:h-[600px] overflow-hidden bg-gradient-to-r from-[#532073] to-[#aa5dcd]">
        <img
          src={bannerGirl}
          alt="banner girl"
          className="hidden lg:block absolute top-5 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:top-10 w-2/3 md:w-1/2 lg:w-1/2 z-10"
        />
        <img
          src={contactShape}
          alt="shape"
          className="hidden md:hidden lg:block absolute left-4 top-4 lg:left-10 lg:top-10 w-12 lg:w-16 z-10"
        />
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
          <img
            src={contactShape}
            id="contactShape2"
            alt="shape"
            className="w-12 lg:w-16 z-10"
          />
        </div>
      </div>
      <img
        className="w-10 relative hidden md:block left-20 top-[-60px] z-50"
        src={circle}
        alt=""
      />
      <div
        id="banner-content"
        className="absolute top-8 md:top-40 left-4 md:left-20 px-4 md:px-0"
      >
        <div>
          <h1 className="text-[#E4CFFF] text-xl md:text-2xl">
            NÃO PERCA TEMPO!!!
          </h1>
        </div>
        <div className="font-bold text-xl md:text-3xl lg:text-4xl text-white">
          <h1>Contrate freelancers</h1>
          <h1>especializados para qualquer</h1>
          <h1>trabalho online.</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <button className="bg-[#D6B8FF] font-semibold text-white py-3 px-4 text-sm md:text-md rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
            QUERO CONTRATAR
          </button>
          <button className="bg-[#363636] font-semibold text-white py-3 px-4 text-sm md:text-md rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#5a6a75]">
            TRABALHE COMO FREELA
          </button>
        </div>
      </div>
      <div className="mt-8 px-4">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold w-full md:w-4/5 lg:w-1/3">
            Saiba como funciona nossoprocesso.
          </h1>
        </div>
        <div
          id="image-content"
          className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={functiona1}
              alt="Pc image"
              className="w-3/4 md:w-full lg:w-4/5"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 mt-5 md:mt-0">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Publique o projeto
            </h1>
            <h2 className="mt-2 text-sm md:text-base">
              Conte-nos em poucas palavras o que você precisa. É grátis e sem
              compromisso!
            </h2>
          </div>
        </div>
        <div className="hidden mt-5 md:flex justify-center">
          <img src={line1} className="w-2/3" alt="" />
        </div>
        <div
          id="image-content"
          className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between"
        >
          <div className="flex flex-col mt-5 items-center md:items-start ml-0 md:ml-24 text-center md:text-left md:w-1/2">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Selecione o profissional
            </h1>
            <h2 className="mt-2 text-sm md:text-base">
              Receba propostas de excelentes freelancers. Escolha o melhor para
              o seu projeto.
            </h2>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <img src={functiona2} className="w-3/4 md:w-full lg:w-4/5" alt="" />
          </div>
        </div>
        <div className="hidden mt-5 md:flex justify-center">
          <img src={line2} className="w-2/3" alt="" />
        </div>
        <div
          id="image-content"
          className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={functiona3}
              alt="Pc image"
              className="w-3/4 md:w-full lg:w-4/5"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 mt-5 md:mt-0">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Faça o pagamento
            </h1>
            <h2 className="mt-2 text-sm md:text-base">
              Você faz o pagamento com total garantia sobre o valor depositado e
              já começa a trabalhar :)
            </h2>
          </div>
        </div>
        <div className="hidden mt-5 md:flex justify-center">
          <img src={line3} className="w-2/3" alt="" />
        </div>
        <div
          id="image-content"
          className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between"
        >
          <div className="flex flex-col mt-5 items-center md:items-start ml-0 md:ml-24 text-center md:text-left md:w-1/2">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Aceite e Finalize
            </h1>
            <h2 className="mt-2 text-sm md:text-base">
              Receba o projeto concluído e libere o valor depositado ao
              freelancer.
            </h2>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <img src={functiona4} className="w-3/4 md:w-full lg:w-4/5" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 md:mt-32 mx-4 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-[#D6B8FF] font-semibold text-white py-3 px-4 text-sm md:text-md rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
          PUBLIQUE UM PROJETO
        </button>
        <button className="bg-[#363636] font-semibold text-white py-3 px-4 text-sm md:text-md rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#5a6a75]">
          TRABALHE COMO FREELA
        </button>
      </div>
      <div
        id="image-content"
        className="mt-10 mb-20 md:mt-40 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between"
      >
        <div className="flex flex-col mt-5 items-center md:items-start ml-0 md:ml-24 text-center md:text-left md:w-1/2">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl">
            Torne-se um profissional digital.
          </h1>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Torne-se um freelancer.
          </h1>
          <h2 className="mt-2 text-sm md:text-base">
            Você pode melhorar a sua presença na web, vender online, vender nas
            redes sociais, criar conteúdos que mantenham seus clientes
            interessados ​​na sua marca e muito mais!
          </h2>
          <button className="bg-[#D6B8FF] mt-5 font-semibold text-white p-3 text-sm rounded-sm transition-transform transform hover:scale-105 hover:bg-[#B09CFF]">
            COMEÇE SUA JORNADA!
          </button>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <img src={freelas} className="w-3/4 md:w-full lg:w-4/5" alt="" />
        </div>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="flex justify-center">
          <h1 className="text-center text-4xl my-20 w-full mx-2 md:w-3/6">
            Milhares de pessoas acreditam em nossos{" "}
            <span className="text-[#D6B8FF] font-bold">FREELANCES</span>
          </h1>
        </div>

        <div className="">
          <Carousel
            autoPlay="true"
            axis="horizontal"
            verticalSwipe="standard"
            showIndicators="false"
            interval="2000"
            infiniteLoop="true"
            showThumbs="false"
          >
            <div className="flex p-4 flex-col md:flex-col bg-white items-center">
              <div className="w-1/4 md:w-1/6 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <p className="text-xl px-4 w-full text-start md:w-2/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="font-semibold text-[#D6B8FF]">
                Eduardo Lopes - Realtech Produções
              </p>
            </div>
            <div className="flex p-4 flex-col md:flex-col bg-white items-center">
              <div className="w-1/4 md:w-1/6 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <p className="text-xl px-4 w-full text-start md:w-2/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="font-semibold text-[#D6B8FF]">
                Eduardo Lopes - Realtech Produções
              </p>
            </div>
            <div className="flex p-4 flex-col md:flex-col bg-white items-center">
              <div className="w-1/4 md:w-1/6 mb-4 md:mb-0 flex justify-center">
                <img
                  className="w-full h-auto object-cover"
                  src={pfp}
                  alt="Profile"
                />
              </div>
              <p className="text-xl px-4 w-full text-start md:w-2/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="font-semibold text-[#D6B8FF]">
                Eduardo Lopes - Realtech Produções
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="py-20">
        <div className="">
          <h1 className="text-2xl text-center">
            Não deixe para amanhã, o que pode fazer{" "}
            <span className="font-bold">HOJE!</span>{" "}
          </h1>
          <h1 className="text-[#D6B8FF] text-2xl text-center font-bold">
            Coloque suas ideias em prática
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center">
            <img src={seoAndWebMin} alt="SEO and Web" className="w-32 h-32" />
            <h3 className="mt-2 text-center">SEO and Web</h3>
          </div>
          <div className="w-2/4">
          <div className="flex flex-col items-center">
            <img
              src={quickMobileOptionsMin}
              alt="Quick Mobile Options"
              className="w-32 h-32"
            />
            <h3 className="mt-2 text-center">Quick Mobile Options</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={vectorMin} alt="Vector" className="w-32 h-32" />
            <h3 className="mt-2 text-center">Vector</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={newsMin} alt="News" className="w-32 h-32" />
            <h3 className="mt-2 text-center">News</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={aimMin} alt="Aim" className="w-32 h-32" />
            <h3 className="mt-2 text-center">Aim</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={moreMin} alt="More" className="w-32 h-32" />
            <h3 className="mt-2 text-center">More</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functiona;
