import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home";
import Navbar from "../../components/Navbar/navbar";
import Como from "../../screens/Como";
import Contact from "../../screens/Contact";
import Cada from "../../screens/Cada";
import Terms from "../../screens/Terms";
import Entrar from "../../screens/Entrar";
import Footer from "../../components/Footer/footer";
import PrivacyPolicy from "../../screens/PrivacyPolicy";
import Faqs from "../../screens/Faqs";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como" element={<Como />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cada" element={<Cada />} />
          <Route path="/entar" element={<Entrar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
