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
      className={`min-h-screen font-montserrat relative ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div id="home">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Main Content */}
        <div className="w-full mt-16">
          <Main darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Projects */}
        <div className="w-full mt-16" id="projects">
          <ProjectsSection darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="w-full mt-16 mb-24" id="certificates">
          <CertificatesSection darkMode={darkMode} />
        </div>

        <div className="w-full mt-16 mb-24" id="achievements">
          <TimelineAchivements darkMode={darkMode} />
        </div>
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* CSS for Custom Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
