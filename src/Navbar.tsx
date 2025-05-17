import { Link } from "react-router-dom";
import { FaHome, FaCalculator, FaCog, FaEnvelope } from "react-icons/fa";
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 p-3 flex justify-around text-white">
      <Link to="/" className="flex flex-col items-center">
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/calculator" className="flex flex-col items-center">
        <FaCalculator size={24} />
        <span className="text-xs">Calculator</span>
      </Link>
      <Link to="/settings" className="flex flex-col items-center">
          <FaCog size={24} />
          <span className="text-xs">Settings</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center">
          <FaEnvelope size={24} />
          <span className="text-xs">Contact</span>
        </Link>
    </nav>
  );
};

export default Navbar;
