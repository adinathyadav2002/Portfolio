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
      className="shadow-2xl rounded-lg overflow-hidden transition-transform duration-500"
      style={{
        width: "100%",
        maxWidth: "550px",
        position: "relative",
        perspective: "1000px",
      }}
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/60 flex items-center p-3">
        <p className="text-white text-xs font-medium">Click to view full size</p>
      </div>
    </div>
  );
});

// Skills list component memoized to prevent unnecessary re-renders
const SkillsList = memo(({ skills, darkMode }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill, i) => (
        <span
          key={`${skill}-${i}`}
          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
            darkMode
              ? "bg-gray-800 text-gray-300 border border-gray-700/60"
              : "bg-gray-100 text-gray-800 border border-gray-200"
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
});

const CertificatesSection = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carousel = useRef();
  const timeoutRef = useRef(null);

  // Sample certificates data - replace with your actual certificates array
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
      verifyLink:
        "https://www.udemy.com/certificate/UC-c178cb74-c6a6-466d-adc8-8c61c78990b8 ",
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
        "Node.js Basics",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "Mongoose",
        "Authentication",
      ],
      verifyLink:
        "https://www.udemy.com/certificate/UC-17c620b9-aaed-4bdf-a131-6242a5cbc96d",
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
      verifyLink: "",
      mentors: ["Mehul Mehta"],
    },
  ];

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

  const nextCertificate = () => {
    if (isTransitioning || certificates.length <= 1) return;

    setIsTransitioning(true);
    const nextIndex = (activeIndex + 1) % certificates.length;

    // Set transition state immediately
    setActiveIndex(nextIndex);

    // End transition state after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with animation duration
  };

  const prevCertificate = () => {
    if (isTransitioning || certificates.length <= 1) return;

    setIsTransitioning(true);
    const prevIndex =
      (activeIndex - 1 + certificates.length) % certificates.length;

    // Set transition state immediately
    setActiveIndex(prevIndex);

    // End transition state after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with animation duration
  };

  const handleThumbnailClick = (index) => {
    if (isTransitioning || index === activeIndex) return;

    setIsTransitioning(true);
    setActiveIndex(index);

    // End transition state after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with animation duration
  };

  // Get the current active certificate
  const activeCertificate = certificates[activeIndex];

  // Display loading state if no certificates
  if (!certificates.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No certificates available
      </div>
    );
  }

  return (
    <div
      className={`${
        darkMode ? "text-gray-200" : "text-gray-800"
      } min-h-screen transition-colors duration-200`}
    >
      {/* Header Section */}
      <section className="relative pt-16 pb-8 border-b border-gray-200 dark:border-gray-800/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1
              className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Certificates
            </h1>
            <p
              className={`text-base md:text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Professional certifications and achievements that showcase my
              technical knowledge and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Display - Main Carousel */}
      <section className="py-12 px-4 relative z-10">
        <div className="md:container w-full max-w-6xl mx-auto relative z-10">
          {/* Featured Certificate */}
          <div
            className={`${
              darkMode ? "bg-gray-900/90 border-gray-800" : "bg-white border-gray-200"
            } rounded-xl border shadow-sm overflow-hidden mb-12`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Certificate Image */}
              <div
                className={`w-full lg:w-1/2 p-4 lg:p-8 ${
                  darkMode ? "bg-gray-800/40" : "bg-gray-50"
                } flex items-center justify-center relative min-h-[380px] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800`}
              >
                <AnimatePresence initial={false} mode="wait">
                  {!isTransitioning && (
                    <motion.div
                      key={`image-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full flex justify-center"
                    >
                      <CertificateImage
                        certificate={activeCertificate}
                        darkMode={darkMode}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Certificate Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                <AnimatePresence initial={false} mode="wait">
                  {!isTransitioning && (
                    <motion.div
                      key={`details-${activeIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h3
                        className={`text-2xl font-bold tracking-tight ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {activeCertificate.title}
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2.5">
                          <School size={18} className="text-blue-500" />
                          <span className="font-medium">
                            {activeCertificate.issuer}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Calendar size={18} className="text-blue-500" />
                          <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                            {activeCertificate.issueDate}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Globe size={18} className="text-blue-500" />
                          <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            Credential ID: {activeCertificate.credential}
                          </span>
                        </div>

                        {activeCertificate.mentors && (
                          <div className="flex flex-col gap-1 pt-1">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Mentors/Instructors:
                            </span>
                            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                              {activeCertificate.mentors.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2">
                        <h4 className="font-semibold text-xs uppercase tracking-wider mb-2.5 text-gray-500">
                          Skills Covered
                        </h4>
                        <SkillsList
                          skills={activeCertificate.skills}
                          darkMode={darkMode}
                        />
                      </div>

                      {activeCertificate.verifyLink != "" && (
                        <div className="pt-3">
                          <a
                            href={`${activeCertificate.verifyLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium ${
                              darkMode
                                ? "bg-white text-gray-900 hover:bg-gray-100"
                                : "bg-gray-900 text-white hover:bg-gray-800"
                            } rounded-lg transition-colors shadow-sm`}
                          >
                            <ExternalLink size={16} />
                            <span>Verify Certificate</span>
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-10">
            <button
              onClick={prevCertificate}
              disabled={isTransitioning || certificates.length <= 1}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-900 border-gray-800 text-gray-200 hover:bg-gray-800"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
              } shadow-sm ${
                isTransitioning || certificates.length <= 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <span
              className={`text-sm font-medium px-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {activeIndex + 1} / {certificates.length}
            </span>

            <button
              onClick={nextCertificate}
              disabled={isTransitioning || certificates.length <= 1}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-900 border-gray-800 text-gray-200 hover:bg-gray-800"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
              } shadow-sm ${
                isTransitioning || certificates.length <= 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Certificates Thumbnails */}
          <div ref={carousel} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-4"
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              {certificates.map((cert, index) => (
                <div
                  key={`thumbnail-${cert.id}`}
                  className={`min-w-[260px] h-[180px] relative rounded-lg border overflow-hidden transition-all duration-200 cursor-pointer ${
                    index === activeIndex
                      ? "border-blue-500 ring-2 ring-blue-500/30"
                      : darkMode
                      ? "border-gray-800 opacity-60 hover:opacity-90"
                      : "border-gray-200 opacity-60 hover:opacity-90"
                  }`}
                  onClick={() => !isDragging && handleThumbnailClick(index)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-end p-3">
                    <h4 className="text-white text-xs font-medium line-clamp-2">
                      {cert.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-4 text-xs text-gray-500">
            <p>Drag or swipe to view certificates</p>
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
      `}</style>
    </div>
  );
};

export default CertificatesSection;
