import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/:language?/*" element={<Home />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
