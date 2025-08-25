import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Page/Home.jsx";
import About from "./Page/Contact.jsx";
import Wheelalignment from "./Page/wheelalignmentpage.jsx";
import AirConPage from "./Page/AirConPage.jsx";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<About />} />
          <Route path="/services/wheel-alignment" element={<Wheelalignment />} />
           <Route path="/services/air-con" element={<  AirConPage />} />
         
       

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
