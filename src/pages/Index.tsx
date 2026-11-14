import Navbar from "@/components/layout/Navbar";
import { useState, useEffect } from "react";
import Main from "@/components/sections/Main";
import ProjectsSection from "@/components/sections/Projects";
import Footer from "../components/sections/Footer";
import CertificatesSection from "@/components/sections/CertificatesSection";
import { TimelineAchivements } from "@/components/sections/TimeLine";

export const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode to body
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans relative ${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Header */}
      <div id="home">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="w-full flex flex-col items-center space-y-24 md:space-y-36">
        {/* Main Content */}
        <div className="w-full pt-20 sm:pt-24 md:pt-28">
          <Main darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Projects */}
        <div className="w-full" id="projects">
          <ProjectsSection darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Certificates */}
        <div className="w-full" id="certificates">
          <CertificatesSection darkMode={darkMode} />
        </div>

        {/* Achievements */}
        <div className="w-full pb-16 md:pb-24" id="achievements">
          <TimelineAchivements darkMode={darkMode} />
        </div>
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />


    </div>
  );
};

export default Index;
