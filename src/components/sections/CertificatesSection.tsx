import { useEffect, useState, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  School,
  Globe,
} from "lucide-react";

// Certificate image component memoized to prevent unnecessary re-renders
const CertificateImage = memo(({ certificate, darkMode }) => {
  return (
    <div
      className="shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
      style={{
        width: "100%",
        maxWidth: "550px",
        position: "relative",
        perspective: "1000px",
      }}
    >
      <div className="certificate-glow absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white">
          <p className="font-medium">Click to view full size</p>
        </div>
      </div>
    </div>
  );
});

// Skills list component memoized to prevent unnecessary re-renders
const SkillsList = memo(({ skills, darkMode, activeIndex }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <motion.span
          key={`${skill}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className={`px-3 py-1 rounded-full text-sm ${
            darkMode
              ? "bg-gray-700 text-gray-200"
              : "bg-indigo-100 text-indigo-800"
          }`}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
});

const CertificatesSection = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const carousel = useRef();
  const timeoutRef = useRef(null);

  // Fixed duplicate IDs in your certificates data
  const certificates = [
    {
      id: "cplus-intro",
      title: "Introduction to C++",
      issuer: "Coding Ninjas",
      issueDate: "October 2022",
      credential: "17fa4b4bb89a897b",
      image: "/images/certificates/CodingNinjas.png",
      skills: [
        "C++ Fundamentals",
        "Data Types",
        "Control Structures",
        "Functions",
        "Arrays",
        "Object-Oriented Programming",
      ],
      verifyLink:
        "https://certificate.codingninjas.com/verify/17fa4b4bb89a897b",
      mentors: ["Nidhi", "Ankush Singla"],
    },
    {
      id: "html-css",
      title: "Udemy HTML & CSS",
      issuer: "Udemy",
      issueDate: "October 2024",
      credential: "UC-15b976dc-c15e-43c9-a37b-fe84be51ca45",
      image: "/images/certificates/htmlCss.png",
      skills: [
        "HTML Basics",
        "CSS Fundamentals",
        "Responsive Design",
        "Flexbox",
        "Grid Layout",
        "JavaScript Basics",
        "DOM Manipulation",
        "Web Accessibility",
        "CSS Animations",
        "Version Control with Git",
        "Web Performance Optimization",
      ],
      verifyLink:
        "https://www.udemy.com/certificate/UC-15b976dc-c15e-43c9-a37b-fe84be51ca45/",
      mentors: ["Jonas Schmedtmann"],
    },
    // You can add more certificates here following the same structure
    {
      id: "js-advanced",
      title: "Udemy JavaScript Advanced",
      issuer: "Udemy",
      issueDate: "December 2024",
      credential: "UC-c178cb74-c6a6-466d-adc8-8c61c78990b8",
      image: "/images/certificates/js.png",
      skills: [
        "JavaScript Advanced",
        "Asynchronous JavaScript",
        "Promises",
        "Async/Await",
        "JavaScript ES6+",
        "JavaScript Design Patterns",
        "JavaScript Modules",
        "JavaScript Performance",
        "JavaScript Debugging",
        "JavaScript Best Practices",
        "JavaScript Tooling",
      ],
      verifyLink: "ude.my/UC-c178cb74-c6a6-466d-adc8-8c61c78990b8 ",
      mentors: ["Jonas Schmedtmann"],
    },
    {
      id: "node-js",
      title: "Udemy Node.js",
      issuer: "Udemy",
      issueDate: "Feb 2025",
      credential: "UC-17c620b9-aaed-4bdf-a131-6242a5cbc96d",
      image: "/images/certificates/node.png",
      skills: [
        "C++ Fundamentals",
        "Data Types",
        "Control Structures",
        "Functions",
        "Arrays",
        "Object-Oriented Programming",
      ],
      verifyLink: "ude.my/UC-17c620b9-aaed-4bdf-a131-6242a5cbc96d",
      mentors: ["Jonas Schmedtmann"],
    },
    {
      id: "tcs",
      title: "TCS ION Career Edge Young Professional",
      issuer: "TCS ION Career Edge Young Professional ",
      issueDate: "Dec 2023",
      credential: "119864-25457105-1016 ",
      image: "/images/certificates/tcs.png",
      skills: [
        "Communication Skills",
        "Presentation Skills",
        "Soft Skills",
        "Career Guidance Framework",
        "Resume Writing",
        "Group Discussion Skills",
        "Interview Skills",
        "Business Etiquette",
        "Effective Email Writing",
        "Telephone Etiquette",
        "Accounting Fundamentals",
        "Foundational Skills",
        "Overview of Artificial Intelligence",
      ],
      verifyLink: "/",
      mentors: ["Mehul Mehta"],
    },
  ];

  // Set initial active certificate
  useEffect(() => {
    setActiveCertificate(certificates[activeIndex]);
  }, []);

  // Update carousel width on window resize or content change
  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Clean up any pending timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // When activeIndex changes, update activeCertificate
  useEffect(() => {
    if (!isTransitioning) {
      setActiveCertificate(certificates[activeIndex]);
    }
  }, [activeIndex, isTransitioning]);

  // Navigation functions with added transition state
  const nextCertificate = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const nextIndex =
      activeIndex === certificates.length - 1 ? 0 : activeIndex + 1;

    // First set transition state
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIndex);

      // Give time for rendering before ending transition state
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const prevCertificate = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const prevIndex =
      activeIndex === 0 ? certificates.length - 1 : activeIndex - 1;

    // First set transition state
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(prevIndex);

      // Give time for rendering before ending transition state
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (isTransitioning || index === activeIndex) return;

    setIsTransitioning(true);

    // First set transition state
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);

      // Give time for rendering before ending transition state
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  // Only proceed if we have an active certificate
  if (!activeCertificate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Header Section */}
      <section
        className={`relative pt-20 pb-10 ${
          darkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-indigo-50 to-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              My Certificates
            </h1>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Professional certifications and achievements that showcase my
              technical knowledge and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Display - Main Carousel */}
      <section className="md:py-20 py-12 px-4 relative z-10">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-40 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="md:container w-[95%] mx-auto relative z-10">
          {/* Featured Certificate */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl overflow-hidden mb-16`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Certificate Image */}
              <div
                className={`w-full lg:w-1/2 p-4 lg:p-8 ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                } flex items-center justify-center relative min-h-[400px]`}
              >
                <AnimatePresence initial={false} mode="wait">
                  {!isTransitioning && (
                    <motion.div
                      key={`image-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full flex justify-center"
                    >
                      <CertificateImage
                        certificate={activeCertificate}
                        darkMode={darkMode}
                      />

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20">
                        <motion.div
                          initial={{ rotate: -10, scale: 0.9 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-full h-full bg-indigo-500 rounded-full flex items-center justify-center"
                        >
                          <Award size={32} className="text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Certificate Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                <AnimatePresence initial={false} mode="wait">
                  {!isTransitioning && (
                    <motion.div
                      key={`details-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                        {activeCertificate.title}
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <School size={20} className="text-indigo-500" />
                          <span className="font-medium">
                            {activeCertificate.issuer}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar size={20} className="text-indigo-500" />
                          <span>{activeCertificate.issueDate}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Globe size={20} className="text-indigo-500" />
                          <span className="text-sm opacity-75">
                            Credential ID: {activeCertificate.credential}
                          </span>
                        </div>

                        {activeCertificate.mentors && (
                          <div className="flex flex-col gap-1">
                            <span className="text-indigo-500 font-medium">
                              Mentors/Instructors:
                            </span>
                            <span>{activeCertificate.mentors.join(", ")}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-indigo-500">
                          Skills Covered:
                        </h4>
                        <SkillsList
                          skills={activeCertificate.skills}
                          darkMode={darkMode}
                          activeIndex={activeIndex}
                        />
                      </div>

                      <div className="pt-4">
                        <a
                          href={activeCertificate.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 w-fit px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                          <ExternalLink size={18} />
                          <span>Verify Certificate</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevCertificate}
              disabled={isTransitioning}
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-lg ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft size={24} className="text-indigo-600" />
            </motion.button>

            <div className="flex items-center">
              <span
                className={`text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {activeIndex + 1} / {certificates.length}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextCertificate}
              disabled={isTransitioning}
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-lg ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight size={24} className="text-indigo-600" />
            </motion.button>
          </div>

          {/* Certificates Thumbnails */}
          <motion.div
            ref={carousel}
            className="cursor-grab overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-4"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={`thumbnail-${cert.id}-${index}`}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`min-w-[280px] h-[200px] ${
                    index === activeIndex
                      ? "ring-4 ring-indigo-500"
                      : "opacity-70 hover:opacity-100"
                  } rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    // onError={(e) => {
                    //   e.target.onerror = null;
                    //   e.target.src =
                    //     "https://via.placeholder.com/300x200?text=Certificate";
                    // }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-3">
                    <h4 className="text-white text-sm font-medium line-clamp-2">
                      {cert.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Drag to scroll through certificates</p>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
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
        .certificate-glow {
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.3) 0%,
            rgba(99, 102, 241, 0) 70%
          );
          filter: blur(20px);
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default CertificatesSection;
