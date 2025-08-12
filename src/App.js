// src/App.js
import React from "react";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Body from "./components/Body"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Body /> 
      <Footer />
    </div>
  );
}

export default App;