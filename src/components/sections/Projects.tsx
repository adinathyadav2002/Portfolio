import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Github,
  CheckCircle,
} from "lucide-react";

const ProjectsSection = ({ darkMode, setDarkMode }) => {
  const projects = [
    {
      id: "data-visualization",
      title: "Data Visualization & Analytics Platform",
      desktopImg: "/images/project/data_visualization_desktop.png",
      mobileImg: "/images/project/data_visualization_desktop.png",
      description: [
        "Interactive data visualization & EDA",
        "CSV and Excel data ingestion",
        "Dynamic charts & dataset viewer",
        "Data cleaning & outlier handling",
        "React, TypeScript, FastAPI & Pandas",
      ],
      liveLink: "https://datavisualization.adinathyadav.online",
      codeLink: "https://github.com/adinathyadav2002/data-visualization-project",
    },
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
      liveLink: "https://chatfrontend.adinathyadav.online",
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



    // {
    //   id: "c-project",
    //   title: "C Algorithm Visualizer",
    //   desktopImg: "/images/project/omnifood_desktop.webp",
    //   mobileImg: "/images/project/omnifood_mobile.webp",
    //   description: [
    //     "Sorting algorithm visualization",
    //     "Data structure implementations",
    //     "Performance benchmarking",
    //     "Interactive user controls",
    //     "Educational explanations",
    //   ],
    //   liveLink: "#",
    //   codeLink: "#",
    // },
  ];

  return (
    <div
      className={`${darkMode ? "text-gray-200" : "text-gray-800"
        } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section
        className={`relative pt-10 sm:pt-14 ${darkMode ? "bg-transparent" : "bg-indigo-50/50"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h1
              className={`text-3xl md:text-4xl font-semibold tracking-tight mb-3 ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              My Projects
            </h1>
            <p
              className={`text-sm md:text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                } max-w-xl mx-auto`}
            >
              A showcase of my technical skills and creative solutions across
              different technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Display */}
      <section className="pb-10 sm:pb-14 px-4 relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-14">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  id={project.id}
                  data-project="true"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } 
                  ${darkMode ? "bg-gray-800" : "bg-white"
                    } rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/60 overflow-hidden`}
                >
                  {/* Project Images */}
                  <div
                    className={`w-full lg:w-3/5 p-1 lg:p-8 ${darkMode ? "bg-gray-700/60" : "bg-gray-50"
                      } flex items-center justify-center relative
                    ${isEven ? "lg:rounded-r-none" : "lg:rounded-l-none"}`}
                  >
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
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
                      viewport={{ once: true, amount: 0.3 }}
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
                            viewport={{ once: true, amount: 0.1 }}
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
                          className={`flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium ${darkMode
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
            })}
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
