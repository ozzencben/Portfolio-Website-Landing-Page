import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import MainPage from "../pages/MainPage.jsx";

const AppRoute = () => {
  const mainPageRef = useRef(null);

  const handleNavClick = (section) => {
    mainPageRef.current?.scrollToSection(section);
  };

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      <Routes>
        <Route path="/" element={<MainPage ref={mainPageRef} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoute;
