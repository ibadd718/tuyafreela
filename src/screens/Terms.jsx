import contactShape from "../assets/contactShape-min.png";
import circle from "../assets/circle-min.png";

const Terms = () => {
  const faqs = [
    {
      question: "1. Who can participate in this program?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "2. Who can participate in this program?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "3. Who can participate in this program?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "4. Who can participate in this program?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div className="relative w-full h-auto">
      <div className="relative w-full h-60 md:h-96 overflow-hidden bg-gradient-to-r from-[#532073] to-purple-[#aa5dcd]">
        <h1 className="text-white text-5xl  mt-20 md:mt-40 text-center">
          Termos de uso
        </h1>
        <img
          src={contactShape}
          alt="shape"
          className="hidden md:hidden lg:block absolute left-4 top-4 lg:left-10 lg:top-10 w-12 lg:w-16 z-10"
        />
        <div className="hidden lg:flex absolute left-1/2 bottom-10 items-center justify-center">
          <img
            src={contactShape}
            id="contactShape2"
            alt="shape"
            className="w-12 lg:w-16 z-10"
          />
        </div>
      </div>
      <img
        className="w-10 relative left-32 top-[20px] z-50"
        src={circle}
        alt=""
      />
      <div className="flex flex-col-reverse ml-0 md:ml-5  md:flex-row items-center p-4">
        <div className="flex md:w-full py-8">
          <div className="mx-auto p-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="">
                  <div className="relative">
                    <h2 className="text-3xl mb-4 inline-block">
                      {/* Added mb-4 to add margin-bottom */}
                      <span className="">
                        <span className="absolute bottom-1 left-0 w-[90px] border-b-[#D6B8FF] border-b-8 ">
                          {/* Increased mt-4 to add more space */}
                          &nbsp;
                        </span>
                        {faq.question}
                      </span>
                    </h2>
                  </div>
                  <p className="text-gray-700 w-full md:w-4/5">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
