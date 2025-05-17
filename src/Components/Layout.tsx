import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCog, FaEnvelope, FaCalculator } from "react-icons/fa";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 h-full w-24 bg-gray-800 p-6 flex flex-col items-center text-white space-y-20">
        <Link to="/" className="flex flex-col items-center">
          <FaHome size={28} />
          <span className="text-sm mt-2">Home</span>
        </Link>
        <Link to="/calculator" className="flex flex-col items-center">
          <FaCalculator size={28} />
          <span className="text-sm mt-2">Calculator</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center">
          <FaCog size={28} />
          <span className="text-sm mt-2">Settings</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center">
          <FaEnvelope size={28} />
          <span className="text-sm mt-2">Contact</span>
        </Link>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow p-4 ml-24">{children}</main>
    </div>
  );
};

export default Layout;
