import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import Home1 from "./components/Home1";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/" element={<Home1 />} />
      </Routes>
    </Router>
  );
};

export default App;
