import React from "react";
import { useTheme } from "../components/ThemeContext"; // Import the theme context

const EmergencyCallSection = () => {
  const { darkMode } = useTheme(); // Get darkMode value from the context

  // Define styles based on theme
  const sectionStyle = darkMode
    ? "bg-[#333] text-gray-200" // Dark mode with custom background
    : "bg-gray-100 text-gray-800"; // Light mode

  const buttonStyle = darkMode
    ? "bg-blue-600 hover:bg-blue-700"
    : "bg-blue-500 hover:bg-blue-600";

  const linkStyle = darkMode
    ? "text-blue-400 hover:underline"
    : "text-blue-500 hover:underline";

  return (
    <div
      className={`flex flex-col items-center mb-4 justify-center p-6 ${sectionStyle}`}
    >
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">EMERGENCY CALL 24/7</h1>
        <p className="text-xl mb-6">
          <a href="tel:911234567890" className={linkStyle}>
            91-123-456-7890
          </a>
        </p>
        
      </div>
    </div>
  );
};

export default EmergencyCallSection;
