import React from "react";
import contactShape from "../assets/contactShape-min.png";
import circle from "../assets/circle-min.png";
import listCircle from "../assets/listcircle.png";
import cross from "../assets/cross-min.png";

const contentData = [
  {
    heading: "Introduction",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "History",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Usage",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Modern Use",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Modern Use",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Modern Use",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Modern Use",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-white w-full h-auto">
      <div className="relative w-full h-60 md:h-96 overflow-hidden bg-gradient-to-r from-[#532073] to-[#aa5dcd]">
        <img
          src={contactShape}
          alt="shape"
          className="block absolute left-4 top-4 lg:left-1/3 lg:top-10 w-12 lg:w-16 z-10"
        />
      </div>
      <img
        className="w-10 hidden md:block relative left-24 top-[20px] z-50"
        src={circle}
        alt=""
      />
      <div className="flex justify-center">
        <div
          id="scroll-div-parent"
          className="absolute bg-white shadow-xl w-full md:w-3/4 top-32 md:top-40 "
        >
          <h1 className="text-4xl relative p-20 text-center">
            Política de privacidade
          </h1>
          <img
            className="w-8 absolute top-10 right-10 h-8 ml-40"
            src={cross}
            alt=""
          />
          <div className="flex justify-center">
            <div className=" mb-12 p-4 w-3/4  scrollable-content">
              {contentData.map((content, index) => (
                <div key={index} className="mb-6">
                  <div className="flex space-x-2 space-y-[-7px]">
                    <img className="w-4 h-4" src={listCircle} alt="" />
                    <h2 className="text-3xl  mb-2">{content.heading}</h2>
                  </div>
                  <p>{content.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen  mt-10"></div>
    </div>
  );
};

export default PrivacyPolicy;
