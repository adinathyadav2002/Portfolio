import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  ArrowRight,
  Github,
  Sun,
  Moon,
  FileCode,
  Languages,
  Database,
  CheckCircle,
} from "lucide-react";

const ProjectsSection = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState("react");
  const [isIntersecting, setIsIntersecting] = useState({});
  const projectRefs = useRef({});

  const technologies = [
    { id: "react", name: "React", icon: <FileCode size={24} /> },
    { id: "html_css_js", name: "HTML/CSS/JS", icon: <Code size={24} /> },
    { id: "api", name: "API", icon: <Database size={24} /> },
    { id: "c", name: "C", icon: <Languages size={24} /> },
  ];

  const projects = {
    react: [
      {
        id: "Stranger Live",
        title: "Stranger Live",
        desktopImg: "/images/project/chatting_application.png",
        mobileImg: "/images/project/todolist_mobile.webp",
        description: [
          "Uses WebRTC for video calling",
          "Private and Global chat",
          "Node.js and Socket.io backend",
          "Prisma ORM with MySQL database",
          "MVC architecture",
        ],
        liveLink: "",
        codeLink: "https://github.com/adinathyadav2002/Chatting-Application",
      },
      {
        id: "omnifood",
        title: "Omnifood",
        desktopImg: "/images/project/omnifood_desktop.webp",
        mobileImg: "/images/project/omnifood_mobile.webp",
        description: [
          "Created using HTML, CSS and JS",
          "Deployed on Netlify",
          "Fully responsive design",
          "Performance checked with lighthouse (99%)",
          "Made with Udemy course tutorial",
        ],
        liveLink: "https://omnifoodtry.netlify.app/",
        codeLink: "https://github.com/adinathyadav2002/omnifood",
      },
      {
        id: "portfolio",
        title: "Personal Portfolio",
        desktopImg: "/images/project/portfolio_desktop.webp",
        mobileImg: "/images/project/portfolio_mobile.webp",
        description: [
          "Created using HTML, CSS and JS",
          "Deployed on Netlify",
          "Fully responsive design",
          "Contain All infomation about me",
        ],
        liveLink: "https://adinathyadav.netlify.app/",
        codeLink: "https://github.com/adinathyadav2002/Portfolio",
      },
      {
        id: "pig-game",
        title: "Pig Game (Dice)",
        desktopImg: "/images/project/piggame_desktop.webp",
        mobileImg: "/images/project/piggame_mobile.webp",
        description: [
          "Two player Game",
          "Created using HTML, CSS and JS",
          "Deployed on Netlify",
          "Fully responsive design",
        ],
        liveLink: "https://pigdice-v1.netlify.app/",
        codeLink: "https://github.com/adinathyadav2002/pigGame",
      },

      {
        id: "calculator",
        title: "Calculator",
        desktopImg: "/images/project/calculator_desktop.webp",
        mobileImg: "/images/project/calculator_mobile.webp",
        description: [
          "Created using HTML, CSS and JS",
          "Preform basic computations!",
        ],
        liveLink: "https://adinathyadav2002.github.io/calculator/",
        codeLink: "https://github.com/adinathyadav2002/calculator",
      },
    ],
    html_css_js: [
      {
        id: "react-project",
        title: "React Dashboard",
        desktopImg: "/images/project/omnifood_desktop.webp", // Replace with your image
        mobileImg: "/images/project/omnifood_mobile.webp", // Replace with your image
        description: [
          "Built with React and Tailwind CSS",
          "Interactive data visualization",
          "State management with Redux",
          "Responsive layout for all devices",
          "Dark/Light mode toggle",
        ],
        liveLink: "#",
        codeLink: "#",
      },
    ],
    api: [
      {
        id: "weather-app",
        title: "Weather app",
        desktopImg: "/images/project/weather_desktop.webp",
        mobileImg: "/images/project/weather_mobile.webp",
        description: [
          "Created using HTML, CSS and JS",
          "Use of API's (Weather and Date)",
          "Fully responsive design",
          "Deployed with github pages",
        ],
        liveLink: "https://adinathyadav2002.github.io/weatherApp/",
        codeLink: "https://github.com/adinathyadav2002/weatherApp",
      },
    ],
    c: [
      {
        id: "c-project",
        title: "C Algorithm Visualizer",
        desktopImg: "/images/project/omnifood_desktop.webp", // Replace with your image
        mobileImg: "/images/project/omnifood_mobile.webp", // Replace with your image
        description: [
          "Sorting algorithm visualization",
          "Data structure implementations",
          "Performance benchmarking",
          "Interactive user controls",
          "Educational explanations",
        ],
        liveLink: "#",
        codeLink: "#",
      },
    ],
  };

  // Set up intersection observer once when component mounts
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25, // Lower threshold for easier triggering
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all project elements after they've been rendered
    setTimeout(() => {
      const projectElements = document.querySelectorAll(
        "[data-project='true']"
      );
      projectElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [activeTab]); // Re-run when active tab changes

  return (
    <div
      className={`${
        darkMode ? "text-gray-200" : "text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section
        className={`relative pt-20 ${
          darkMode ? "bg-transparent" : "bg-indigo-50/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1
              className={`text-3xl md:text-4xl font-semibold tracking-tight mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Projects
            </h1>
            <p
              className={`text-sm md:text-base ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-xl mx-auto`}
            >
              A showcase of my technical skills and creative solutions across
              different technologies.
            </p>
          </motion.div>

          {/* Tech Stack Navigation */}
          <div className="flex justify-center mb-10">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } md:rounded-full p-1 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700/60`}
            >
              <div className="grid md:grid-cols-4 grid-cols-2 space-x-1">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setActiveTab(tech.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === tech.id
                        ? "bg-indigo-600 text-white shadow-sm"
                        : `${
                            darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"
                          }`
                    }`}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Display */}
      <section className="md:py-0 py-10 px-4 md:mt-0 relative z-10 mt-2">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {projects[activeTab] && projects[activeTab].length > 0 ? (
              projects[activeTab].map((project, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${activeTab}-${project.id}`}
                    id={project.id}
                    data-project="true"
                    data-tab={activeTab}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } 
                    ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/60 overflow-hidden`}
                  >
                    {/* Project Images */}
                    <div
                      className={`w-full lg:w-3/5 p-1 lg:p-8 ${
                        darkMode ? "bg-gray-700/60" : "bg-gray-50"
                      } flex items-center justify-center relative
                      ${isEven ? "lg:rounded-r-none" : "lg:rounded-l-none"}`}
                    >
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Desktop Image */}
                        <div className="relative rounded-lg overflow-hidden md:w-[420px] md:h-[260px] w-[340px] h-[220px] flex items-center justify-center p-2">
                          <img
                            src={project.desktopImg}
                            alt={`${project.title} desktop view`}
                            className="w-full h-full object-contain filter drop-shadow-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg">
                            <div className="p-3 text-white">
                              <p className="text-xs font-medium">
                                {project.title} - Desktop View
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>


                    </div>

                    {/* Project Description */}
                    <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight text-indigo-600 dark:text-indigo-400">
                          {project.title}
                        </h3>

                        <ul className="space-y-2 mb-6 text-xs sm:text-sm">
                          {project.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false, amount: 0.1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.4 + i * 0.1,
                              }}
                              className="flex items-start"
                            >
                              <span className="inline-block w-4 h-4 mr-2 text-indigo-500 flex-shrink-0 mt-0.5">
                                <CheckCircle size={16} />
                              </span>
                              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-3">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-200 shadow-sm"
                            >
                              <Globe size={15} />
                              <span>Live</span>
                              <ArrowRight size={14} className="ml-0.5" />
                            </a>
                          )}

                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium ${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                            } rounded-full transition-colors duration-200 shadow-sm`}
                          >
                            <Github size={15} />
                            <span>View Code</span>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div
                className={`p-10 text-center ${
                  darkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-white text-gray-600"
                } rounded-xl shadow-lg`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl mb-4">
                    No projects found for this category.
                  </p>
                  <p>
                    Please check back later or select another technology tab.
                  </p>
                </motion.div>
              </div>
            )}
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

export default ProjectsSection;
