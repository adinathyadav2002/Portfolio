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
      className={`pt-16 pb-8 relative ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-700"
      }`}
    >
      {/* Wave SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-99%]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C65.47,69.81,132.77,52.3,198.9,37.1,248.82,25.61,296,13.56,321.39,56.44Z"
            fill={darkMode ? "#111827" : "#F9FAFB"}
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`pt-8 mt-8 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          } flex flex-col md:flex-row justify-center items-center w-full max-w-4xl`}
        >
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span>© {year} Adinath Yadav • Built with</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span>and</span>
              <Coffee size={16} className="mx-1 text-amber-600" />
            </motion.div>
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <Code size={16} className="mr-1 text-indigo-500" />
              Crafted with modern web technologies
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 ${
          darkMode
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-indigo-500 hover:bg-indigo-600 text-white"
        } ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all duration-300`}
        animate={{ y: isVisible ? 0 : 20 }}
        initial={{ y: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
