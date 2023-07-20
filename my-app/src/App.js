import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import Home1 from "./components/Home1";
// import ShopPage from "./ricky-morty-shop/app/root";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/" element={<Home1 />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
