import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../../screens/Home";
import Navbar from "../../components/Navbar/navbar";
import Como from "../../screens/Como";
import Contact from "../../screens/Contact";
import Cada from "../../screens/Cada";
import Terms from "../../screens/Terms";
import Entrar from "../../screens/Entrar";
import Footer from "../../components/Footer/footer";
import Footer2 from "../../components/Footer/footer2";
import PrivacyPolicy from "../../screens/PrivacyPolicy";
import Faqs from "../../screens/Faqs";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";
import PrefillNo from "../../screens/PrefillNo";
import FreelancerForm from "../../screens/freelancerForm";
import Forget from "../../screens/Forget";
import EmailVerification from "../../screens/EmailVerification";

const ConditionalFooter = () => {
  const location = useLocation();
  if (location.pathname === "/signup") {
    return null;
  } else if (location.pathname === "/prefilPage") {
    return null;
  } else if (location.pathname === "/freelancerForm") {
    return null;
  } else if (location.pathname === "/forget") {
    return null;
  } else if (location.pathname === "/verification") {
    return null;
  }
  return <Footer />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como" element={<Como />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/privacy&policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<EmailVerification />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/prefilPage" element={<PrefillNo />} />
        <Route path="/freelancerForm" element={<FreelancerForm />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cada" element={<Cada />} />
        <Route path="/entar" element={<Entrar />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
};

export default Routers;
