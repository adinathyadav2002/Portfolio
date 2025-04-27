import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Code,
  Check,
  Clock,
  Award,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home className="mr-2" size={20} /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <Code className="mr-2" size={20} />,
  },
  {
    name: "Activities",
    href: "#activities",
    icon: <Check className="mr-2" size={20} />,
  },
  {
    name: "Achievements",
    href: "#achievements",
    icon: <Award className="mr-2" size={20} />,
  },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top (within first 20px)
      if (currentScrollY < 20) {
        setVisible(true);
        setScrolled(false);
      } else {
        // Apply backdrop styles when scrolled
        setScrolled(true);

        // Show/hide based on scroll direction with a threshold
        // If scrolling down AND we've scrolled more than 50px since last check
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 100 &&
          currentScrollY - lastScrollY > 10
        ) {
          setVisible(false);
        }
        // If scrolling up AND we've scrolled up more than 5px
        else if (
          currentScrollY < lastScrollY &&
          lastScrollY - currentScrollY > 5
        ) {
          setVisible(true);
        }
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add throttling to avoid performance issues
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-sm ${
        scrolled
          ? darkMode
            ? "bg-gray-900/95 shadow-md"
            : "bg-white/95 shadow-md"
          : darkMode
          ? "bg-gray-900/80"
          : "bg-white/80"
      } ${visible ? "translate-y-0" : "-translate-y-full"} ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Layout */}
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Now positioned absolutely on the left */}
          <div className="absolute left-0 flex items-center">
            <span
              className={`font-bold text-xl ${
                darkMode
                  ? "bg-gradient-to-r from-purple-500 to-blue-500"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              } bg-clip-text text-transparent`}
            >
              AY
            </span>
          </div>

          {/* Desktop Navigation - Now centered */}
          <div className="hidden md:block">
            <nav className="flex items-center justify-center">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className={`flex items-center transition-all duration-300 ${
                      darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                    }`}
                  >
                    <a
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center group relative overflow-hidden ${
                        activeLink === link.href
                          ? darkMode
                            ? "text-white bg-gray-700"
                            : "text-gray-900 bg-gray-200"
                          : darkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.href);
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {/* Hover background effect */}
                      <span
                        className={`absolute inset-0 ${
                          darkMode
                            ? "bg-gradient-to-r from-blue-600 to-purple-600"
                            : "bg-gradient-to-r from-blue-200 to-purple-200"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md ${
                          activeLink === link.href ? "opacity-100" : ""
                        }`}
                      ></span>

                      {/* Content */}
                      <span className="relative z-10 flex items-center">
                        <span className="transform group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Theme Toggle Button - Now positioned absolutely on the right */}
          <div className="absolute md:right-0 right-10">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-blue-100 text-gray-800 hover:bg-blue-200"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button - Now positioned absolutely on the right */}
          <div className="md:hidden absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors duration-200 relative overflow-hidden group`}
            >
              <span
                className={`absolute inset-0 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-gradient-to-r from-blue-200 to-purple-200"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md`}
              ></span>
              <span className="relative z-10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden absolute top-full left-0 right-0 shadow-lg py-4 px-6 ${
              darkMode
                ? "bg-gray-800/95 backdrop-blur-sm"
                : "bg-white/95 backdrop-blur-sm"
            } ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 py-2 ${
                      darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                    } transition-colors relative overflow-hidden`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsOpen(false);
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {/* Content */}
                    <span className="relative z-10 flex items-center">
                      {link.icon}
                      <span className="transform hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
