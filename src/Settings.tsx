import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Settings: React.FC<{ darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center px-4 py-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        {darkMode ? <FaSun size={20} className="mr-2" /> : <FaMoon size={20} className="mr-2" />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Leave Feedback Button */}
      <button
        onClick={() => window.open("https://x.com/selidevJS", "_blank")}
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
      >
        Leave Feedback
      </button>
    </div>
  );
};

export default Settings;
