import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/Home";
import Calculator from "./Components/Calculator";
import Settings from "./Components/Settings";
import Contact from "./Components/Contact";

const App: React.FC = () => {
  // 🔹 Add Theme State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Load saved theme
  });

  // 🔹 Persist Theme to Local Storage
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} min-h-screen flex flex-col`}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/Calculator" element={<Layout><Calculator /></Layout>} />
          <Route path="/Settings" element={<Layout><Settings darkMode={darkMode} setDarkMode={setDarkMode} /></Layout>} />
          <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
