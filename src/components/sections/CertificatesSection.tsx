import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  School,
  Globe,
} from "lucide-react";

const CertificatesSection = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // Sample certificates data
  const certificates = [
    {
      id: "web-dev",
      title: "The Complete Web Development Bootcamp",
      issuer: "Udemy",
      issueDate: "June 2023",
      credential: "UC-9d1a4b5c-6e78-4f1a-9b3c-0d2e3f4g5h6i",
      image: "/images/certificates/web-dev-cert.webp", // Sample image path
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      verifyLink: "https://udemy.com/certificate/UC-9d1a4b5c",
    },
    {
      id: "react-advanced",
      title: "Advanced React and Redux",
      issuer: "Coursera",
      issueDate: "August 2023",
      credential: "CERT-12345-ABCDE",
      image: "/images/certificates/react-cert.webp", // Sample image path
      skills: [
        "React Hooks",
        "Redux",
        "Context API",
        "Performance Optimization",
        "Testing",
      ],
      verifyLink: "https://coursera.org/verify/CERT-12345-ABCDE",
    },
    {
      id: "algorithms",
      title: "Data Structures and Algorithms",
      issuer: "freeCodeCamp",
      issueDate: "October 2023",
      credential: "DSA-987654321",
      image: "/images/certificates/dsa-cert.webp", // Sample image path
      skills: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Sorting Algorithms",
        "Big O Notation",
      ],
      verifyLink: "https://freecodecamp.org/certification/DSA-987654321",
    },
    {
      id: "python",
      title: "Python for Data Science",
      issuer: "DataCamp",
      issueDate: "January 2024",
      credential: "DC-PYDS-123456",
      image: "/images/certificates/python-cert.webp", // Sample image path
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
      verifyLink: "https://datacamp.com/verify/DC-PYDS-123456",
    },
    {
      id: "aws",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "March 2024",
      credential: "AWS-CP-12345678901",
      image: "/images/certificates/aws-cert.webp", // Sample image path
      skills: [
        "Cloud Computing",
        "AWS Infrastructure",
        "Security",
        "Pricing",
        "Support",
      ],
      verifyLink: "https://aws.amazon.com/verification/AWS-CP-12345678901",
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

  // Navigation functions
  const nextCertificate = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-40 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="md:container w-[95%] mx-auto relative z-10">
          {/* Featured Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl overflow-hidden mb-16`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Certificate Image */}
              <div
                className={`w-full lg:w-1/2 p-4 lg:p-8 ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                } flex items-center justify-center relative`}
              >
                <motion.div
                  initial={{ scale: 0.9, rotateY: 10 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="relative"
                >
                  <div
                    className="shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
                    style={{
                      width: "100%",
                      maxWidth: "550px",
                      position: "relative",
                      perspective: "1000px",
                    }}
                  >
                    <div className="certificate-glow absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={certificates[activeIndex].image}
                      alt={certificates[activeIndex].title}
                      className="w-full h-full object-cover"
                      // onError={(e) => {
                      //   e.target.onerror = null;
                      //   e.target.src =
                      //     "https://via.placeholder.com/600x400?text=Certificate";
                      // }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Click to view full size</p>
                      </div>
                    </div>
                  </div>

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
              </div>

              {/* Certificate Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                <motion.div
                  key={certificates[activeIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {certificates[activeIndex].title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <School size={20} className="text-indigo-500" />
                      <span className="font-medium">
                        {certificates[activeIndex].issuer}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={20} className="text-indigo-500" />
                      <span>{certificates[activeIndex].issueDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Globe size={20} className="text-indigo-500" />
                      <span className="text-sm opacity-75">
                        Credential ID: {certificates[activeIndex].credential}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-indigo-500">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {certificates[activeIndex].skills.map((skill, i) => (
                        <motion.span
                          key={skill}
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
                  </div>

                  <div className="pt-4">
                    <a
                      href={certificates[activeIndex].verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-fit px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink size={18} />
                      <span>Verify Certificate</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevCertificate}
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-lg`}
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
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-lg`}
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
                  key={cert.id}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`min-w-[280px] h-[200px] ${
                    index === activeIndex
                      ? "ring-4 ring-indigo-500"
                      : "opacity-70 hover:opacity-100"
                  } rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    // onError={(e) => {
                    //   e.target.onerror = null;
                    //   e.target.src =
                    //     "https://via.placeholder.com/300x200?text=Certificate+Thumbnail";
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
