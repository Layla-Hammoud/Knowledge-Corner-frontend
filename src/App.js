import React from "react";

import Footer from "./components/Footer/Footer.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import Contents from "./components/Contents/Contents.js";


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Contents/>
      <Footer />
    </div>
  );
}

export default App;
