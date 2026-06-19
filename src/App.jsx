import React from "react";
import { ReactLenis } from "lenis/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import QuemSomos from "./components/QuemSomos";
import Missao from "./components/Missao";
import Versiculos from "./components/Versiculos";
import Galeria from "./components/Galeria";
import Lideranca from "./components/Lideranca";
import ComoFunciona from "./components/ComoFunciona";
import Depoimentos from "./components/Depoimentos";
import ConviteFinal from "./components/ConviteFinal";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <ReactLenis root>
      <div className="bg-[#1A1A2E] text-slate-100 min-h-screen font-nunito selection:bg-brand-pink selection:text-white">
        {/* Navigation Header */}
        <Header />

        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quem Somos Section */}
        <QuemSomos />

        {/* 3. Nossa Missão Section */}
        <Missao />

        {/* 4. Versículos Bíblicos Section */}
        <Versiculos />

        {/* 5. Galeria Section */}
        <Galeria />

        {/* 6. Liderança Section */}
        <Lideranca />

        {/* 7. Como Funciona Section */}
        <ComoFunciona />

        {/* 8. Depoimentos Section */}
        <Depoimentos />

        {/* 9. Convite Final Section */}
        <ConviteFinal />

        {/* 10. Footer Section */}
        <Footer />
      </div>
    </ReactLenis>
  );
};
