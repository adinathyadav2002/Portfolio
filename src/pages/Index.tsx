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
      className={`min-h-screen font-montserrat text-gray-800 relative overflow-hidden ${
        darkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-tl from-gray-100 to-white"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-purple-500/10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-pink-500/10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}

      <div id="home">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Main Content */}
      <div className="mt-16">
        <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Projects */}
      <div className="mt-16" id="projects">
        <ProjectsSection darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="mt-16 mb-24" id="certificates">
        <CertificatesSection darkMode={darkMode} />
      </div>

      <div className="mt-16 mb-24" id="achievements">
        <TimelineAchivements darkMode={darkMode} />
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
