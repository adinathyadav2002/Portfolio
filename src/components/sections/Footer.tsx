import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ChevronUp,
  Heart,
  Coffee,
  Code,
  MapPin,
} from "lucide-react";

const Footer = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [year] = useState(new Date().getFullYear());

  // Control visibility of scroll-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer
      className={`py-8 border-t ${
        darkMode ? "bg-gray-900 border-gray-800 text-gray-400" : "bg-gray-50 border-gray-200 text-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
        <div>
          <span>© {year} Adinath Yadav. Built with React & Tailwind CSS.</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/adinathyadav2002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adinathyadav@example.com"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-2.5 rounded-lg border shadow-sm z-50 ${
          darkMode
            ? "bg-gray-900 border-gray-800 hover:bg-gray-800 text-gray-200"
            : "bg-white border-gray-200 hover:bg-gray-100 text-gray-700"
        } ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all duration-200`}
        animate={{ y: isVisible ? 0 : 20 }}
        initial={{ y: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
