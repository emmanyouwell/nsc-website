import React from "react";
import Home from "./routes/Home";
import WholeNumber from "./routes/WholeNumber";
import Fraction from "./routes/Fraction.js";
import Converter from "./routes/Converter.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whole-number" element={<WholeNumber />} />
        <Route path="/fraction" element={<Fraction />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </div>
  );
}

export default App;
