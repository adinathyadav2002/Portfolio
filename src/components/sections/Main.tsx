import {
  Instagram,
  Linkedin,
  Github,
  Award,
  FileText,
  Star,
  Code,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
export default function Main({ darkMode, setDarkMode }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <section className="mb-16 sm:mb-20 relative">
        <div
          className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Left Column - Profile Image & Social Links */}
          <div
            className="w-full lg:w-2/5 flex flex-col items-center"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: "all 0.6s ease-out",
            }}
          >
            {/* Profile Image with clean professional frame */}
            <div className="relative mb-6 w-48 h-48 sm:w-56 sm:h-56">
              <div
                className={`w-full h-full rounded-2xl overflow-hidden border ${
                  darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100"
                } shadow-sm`}
              >
                <img
                  src="/images/my_image_1.png"
                  alt="Adinath Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <span
                className={`text-xs sm:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } font-medium block mb-1.5 tracking-wider uppercase`}
              >
                Hello, I am
              </span>

              <h1
                className={`text-2xl sm:text-3xl lg:text-4xl font-semibold my-1.5 tracking-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Adinath Yadav
              </h1>

              <div
                className={`px-3 py-1 mt-1.5 ${
                  darkMode
                    ? "bg-gray-800/80 border border-gray-700/80 text-gray-300"
                    : "bg-gray-100 border border-gray-200 text-gray-700"
                } rounded-md inline-block`}
              >
                <span className="text-xs font-medium tracking-wide">
                  B.Tech. in Information Technology
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => openInNewTab("https://instagram.com/")}
                className={`p-2 rounded-lg border transition-colors ${
                  darkMode
                    ? "border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                    : "border-gray-200 bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </button>
              <button
                onClick={() => openInNewTab("https://linkedin.com/")}
                className={`p-2 rounded-lg border transition-colors ${
                  darkMode
                    ? "border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                    : "border-gray-200 bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </button>
              <button
                onClick={() => openInNewTab("https://github.com/")}
                className={`p-2 rounded-lg border transition-colors ${
                  darkMode
                    ? "border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                    : "border-gray-200 bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                aria-label="GitHub"
              >
                <Github size={16} />
              </button>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div
            className="w-full lg:w-3/5"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            <div
              className={`${
                darkMode
                  ? "bg-gray-900/90 border-gray-800"
                  : "bg-white border-gray-200"
              } rounded-xl shadow-sm overflow-hidden border`}
            >
              <div className="p-6 sm:p-7">
                <h2
                  className={`text-lg sm:text-xl font-semibold mb-4 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  } flex items-center gap-2`}
                >
                  <span
                    className={`${
                      darkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    } px-2 py-0.5 rounded-md text-xs font-medium`}
                  >
                    About
                  </span>
                  Me
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed font-normal">
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    I am an Information Technology student with a passion for
                    solving problems. I specialize in developing efficient
                    solutions to complex challenges and enjoy exploring new
                    technologies to expand my technical knowledge.
                  </p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    My expertise includes web development, data structures,
                    algorithms, and creating impactful digital experiences that
                    address real-world problems. I am detail-oriented and
                    committed to writing clean, maintainable code while
                    following industry best practices.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href="./Adinath_Yadav_resume.pdf"
                    className={`flex items-center justify-center gap-2 py-2 px-4 ${
                      darkMode
                        ? "bg-gray-100 text-gray-900 hover:bg-white"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    } rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto shadow-sm`}
                    download="Adinath_Yadav_Resume"
                  >
                    <FileText size={15} />
                    <span>Download Resume</span>
                  </a>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Scroll to explore more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-0 pb-16"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <h2
            className={`text-xl sm:text-2xl font-semibold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            A selection of recent projects highlighting development and architecture
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Project 1 */}
          <motion.div
            className={`${
              darkMode
                ? "bg-gray-900/90 border-gray-800"
                : "bg-white border-gray-200"
            } rounded-xl border shadow-sm overflow-hidden flex flex-col`}
          >
            <div className="h-60 sm:h-64 p-3 sm:p-5 flex items-center justify-center bg-gray-950/40 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800/80 overflow-hidden">
              <img
                src="/images/project/chatting_application.png"
                alt="Stranger Live Application"
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Stranger Live
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  WebRTC
                </span>
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  Socket.io
                </span>
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  Prisma
                </span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } text-xs sm:text-sm leading-relaxed mb-5 flex-1`}
              >
                A real-time chat application enabling anonymous conversations
                between strangers. Built with WebRTC for peer-to-peer
                communication and Socket.io for signaling. Features include text
                messaging, video calls and file sharing.
              </p>
              <a
                href="https://github.com/adinathyadav2002/Chatting-Application"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 py-1.5 px-3.5 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200"
                } rounded-md text-xs sm:text-sm font-medium transition-colors`}
              >
                <span>View source code</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className={`${
              darkMode
                ? "bg-gray-900/90 border-gray-800"
                : "bg-white border-gray-200"
            } rounded-xl border shadow-sm overflow-hidden flex flex-col`}
          >
            <div className="h-60 sm:h-64 p-3 sm:p-5 flex items-center justify-center bg-gray-950/40 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800/80 overflow-hidden">
              <img
                src="/images/project/weather_desktop.png"
                alt="Weather App Project"
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Weather App
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  HTML
                </span>
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  CSS
                </span>
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  JavaScript
                </span>
                <span
                  className={`px-2 py-0.5 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } rounded-md text-xs font-medium`}
                >
                  API
                </span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } text-xs sm:text-sm leading-relaxed mb-5 flex-1`}
              >
                Interactive weather application integrating multiple APIs to
                provide comprehensive weather conditions and forecasts. Features
                include location search, current conditions, and detailed
                meteorological data visualization. Hosted on GitHub Pages.
              </p>
              <a
                href="https://adinathyadav2002.github.io/weatherApp/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 py-1.5 px-3.5 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200"
                } rounded-md text-xs sm:text-sm font-medium transition-colors`}
              >
                <span>View Project</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <a
            href="#projects"
            className={`inline-flex items-center gap-2 py-2 px-5 ${
              darkMode
                ? "bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800"
                : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200"
            } rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm`}
          >
            <Code
              size={16}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <span>View All Projects</span>
            <span className="ml-0.5">→</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <section
        className="mb-16 sm:mb-20 px-0"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <div className="mb-8 text-center">
          <h2
            className={`text-xl sm:text-2xl font-semibold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional Achievements
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Competitive programming and algorithmic problem-solving milestones
          </p>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-gray-900/90 border-gray-800"
              : "bg-white border-gray-200"
          } rounded-xl p-5 sm:p-7 border shadow-sm`}
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2.5">
            <div
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-800"
              }`}
            >
              <Award size={20} />
            </div>
            <h3
              className={`text-base sm:text-lg font-semibold text-center sm:text-left ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Competitive Programming Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "LeetCode",
                description:
                  "Solved 250+ questions on LeetCode with focus on algorithms, data structures, and optimization techniques",
              },
              {
                title: "CodeChef",
                description:
                  "Achieved 3★ rating on CodeChef through consistent participation in competitive programming contests",
              },
              {
                title: "Codeforces",
                description:
                  "Reached Pupil status on Codeforces by demonstrating strong problem-solving and algorithmic skills",
              },
            ].map((achievement, index) => (
              <div
                key={achievement.title}
                className={`${
                  darkMode ? "bg-gray-800/60 border-gray-700/60" : "bg-gray-50 border-gray-200"
                } rounded-lg p-5 border transition-colors`}
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: `all 0.6s ease-out ${0.1 * index}s`,
                }}
              >
                <div className="flex items-center mb-3">
                  <div
                    className={`p-2 ${
                      darkMode ? "bg-gray-700 text-amber-400" : "bg-white text-amber-500 border border-gray-200"
                    } rounded-md mr-3`}
                  >
                    <Star
                      size={18}
                      fill="currentColor"
                    />
                  </div>
                  <h4
                    className={`text-base font-semibold ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {achievement.title}
                  </h4>
                </div>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm leading-relaxed`}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
