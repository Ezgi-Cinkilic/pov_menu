import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppMenu from "./AppMenu"; // Daha önce oluşturduğumuz menü bileşeni

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ana Sayfa */}
        <Route path="/menu" element={<AppMenu />} /> {/* Menü Sayfası */}
      </Routes>
    </Router>
  );
}

export default App;
