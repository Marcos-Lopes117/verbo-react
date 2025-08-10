// src/App.js
import React from "react";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Body from "./components/Body"; // Importe o novo componente Body

function App() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Body /> {/* Use o componente Body aqui */}
    </div>
  );
}

export default App;