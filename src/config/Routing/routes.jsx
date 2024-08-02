import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home";
import Navbar from "../../components/Navbar/navbar";
import Como from "../../screens/Como";
import Cada from "../../screens/Cada";
import Entrar from "../../screens/Entrar";
import Footer from "../../components/Footer/footer";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como" element={<Como />} />
          <Route path="/cada" element={<Cada />} />
          <Route path="/entar" element={<Entrar />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};
export default Routers;
