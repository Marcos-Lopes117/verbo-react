// src/components/TopBanner.js
import React from "react";
import "./TopBanner.css";
import backtop from "../assets/backtop.png";

function TopBanner() {
  return (
    <div className="top-banner">
      <img src={backtop} alt="Banner da Igreja" className="banner-img" />
    </div>
  );
}

export default TopBanner;
