import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BluePulsePage from "./BluePulsePage";
import GovPage from "./GovPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BluePulsePage />} />
        <Route path="/gov" element={<GovPage />} />
      </Routes>
    </Router>
  );
}

export default App;
