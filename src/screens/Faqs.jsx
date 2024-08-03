import contactShape from "../assets/contactShape-min.png";
import circle from "../assets/circle-min.png";

const Faqs = () => {
  const faqs = [
    {
      question: "How much does it cost to use EnjoyTickets?",
      answer: "All the pricing information can be found here.",
    },
    {
      question: "Do I pay for a free event?",
      answer: "No, it's completely free for free events.",
    },
    {
      question: "How to contact EnjoyTickets Support?",
      answer:
        "If you have questions, please contact info@enjoytickets.co.uk to get in touch. We’re more than happy to help.",
    },
    {
      question: "How to delete an event?",
      answer:
        "If there are no completed orders, go to My Events page and click Delete on the Event Dashboard. If there are completed orders, you can refund paid orders and cancel or delete free orders to be able to delete the event.",
    },
    {
      question: "I did not receive my payout?",
      answer:
        "Your event didn't finish yet, bank details missing, or the payout was returned due to bank details issue.",
    },
    {
      question: "When do I get paid?",
      answer:
        "Payouts are transferred 5 working days after the event has taken place. You need to make sure your bank details are correct in your organiser profile.",
    },
  ];
  const questions = [
    "Do I pay for a free event?",
    "How to contact EnjoyTickets Support?",
    "How to delete an event?",
    "I did not receive my payout?",
    "When do I get paid?",
  ];
  return (
    <div className="relative w-full h-auto">
      <div className="relative w-full h-60 md:h-96 overflow-hidden bg-gradient-to-r from-[#532073] to-purple-[#aa5dcd]">
        <h1 className="text-white text-5xl  mt-20 md:mt-40 text-center">
          Perguntas Frequentes
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
        className="w-10 relative hidden md:block left-32 top-[100px] z-50"
        src={circle}
        alt=""
      />

      <div className="flex flex-col md:flex-row py-10 ">
        <div className="w-full flex justify-normal mt-2 md:mt-32 md:justify-center">
          <ul className="list-disc pl-5 space-y-2">
            <h1 className="text-[#B383F3] text-xl">
              How much does it cost to{" "}
              <div className="font-bold">use EnjoyTickets?</div>
            </h1>
            {questions.map((question, index) => (
              <p key={index} className="text-gray-700 text-lg">
                {question}
              </p>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li key={index} className="p-4 rounded-lg">
                <h3 className="text-3xl font-medium text-gray-700">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
