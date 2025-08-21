import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Home from "./components/Home"; 
import About from "./components/About";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/verbo-react">
      <ScrollToTop />
      <div>
        <Header />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/programacao" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;