import "./App.css";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
// import About from "./components/About";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");

  function modeEnable() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010914";
      document.body.style.color = "#f8f9fa";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
    }
  }

  return (
    <>
      <Navbar brandName="TextMastery" mode={mode} enableMode={modeEnable} />

      <div className="container my-3">
        <Textfrom heading="Enter your text here..." mode={mode} />
      </div>
      <Footer />
    </>
  );
}

export default App;
