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
    name: "Certificates",
    href: "#certificates",
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

    // Enable smooth scrolling for the whole document
    document.documentElement.style.scrollBehavior = "smooth";
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
          : "bg-transparent" // Transparent when not scrolled
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
              className={`font-bold text-xl tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              AY
            </span>
          </div>

          {/* Desktop Navigation - Now centered */}
          <div className="hidden md:block">
            <nav className="flex items-center justify-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name} className="flex items-center">
                    <a
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${
                        activeLink === link.href
                          ? darkMode
                            ? "text-white bg-gray-800"
                            : "text-gray-900 bg-gray-100 font-semibold"
                          : darkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800/60"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
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
                      {link.icon}
                      <span>{link.name}</span>
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
              className={`p-2 rounded-md border transition-colors duration-200 ${
                darkMode
                  ? "bg-gray-900 border-gray-800 text-gray-200 hover:bg-gray-800"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
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
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              } rounded-md transition-colors duration-200`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
