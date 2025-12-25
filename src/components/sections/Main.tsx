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
    <main className="container mx-auto px-6 py-12 max-w-6xl">
      <section className="mb-16 sm:mb-24 relative">
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
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
            {/* Profile Image with enhanced animations */}
            <div className="relative mb-8 group w-56 h-56 sm:w-64 sm:h-64">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-500 animate-spin"
                  style={{ animationDuration: "8s" }}
                ></div>
                <div
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-75 blur-md transition-all duration-700 animate-spin"
                  style={{ animationDuration: "12s" }}
                ></div>
              </div>

              <div
                className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
                  darkMode ? "border-gray-800" : "border-white"
                } shadow-2xl transform group-hover:scale-105 transition-all duration-500`}
              >
                <img
                  src="/images/my_image_1.jpeg"
                  alt="Adinath Yadav"
                  className="w-full h-full object-contain object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating sparkles
                <FloatingElement delay={0}>
                  <Sparkles className="absolute top-4 right-4 w-4 h-4 text-yellow-400" />
                </FloatingElement>
                <FloatingElement delay={1.5}>
                  <Sparkles className="absolute bottom-6 left-6 w-3 h-3 text-blue-400" />
                </FloatingElement> */}
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-10">
              <span
                className={`text-base sm:text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } font-light block mb-2 tracking-wide`}
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: "all 0.6s ease-out 0.3s",
                }}
              >
                Hello, I am
              </span>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold my-3 font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: "all 0.8s ease-out 0.4s",
                }}
              >
                Adinath Yadav
              </h1>

              <div
                className={`px-4 sm:px-6 py-3 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                } rounded-full inline-block backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: "all 0.6s ease-out 0.5s",
                }}
              >
                <span
                  className={`text-xs sm:text-sm ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  } uppercase font-semibold tracking-wider`}
                >
                  B.Tech. in Information Technology
                </span>
              </div>
            </div>

            {/* Enhanced Social Media Links */}
            <div
              className="flex items-center gap-4 sm:gap-6 mt-2"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: "all 0.6s ease-out 0.6s",
              }}
            >
              <button
                onClick={() => openInNewTab("https://instagram.com/")}
                className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-pink-300/50"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => openInNewTab("https://linkedin.com/")}
                className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-300/50 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => openInNewTab("https://github.com/")}
                className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-gray-400/30 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-gray-400/30"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced About Me */}
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
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                  : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
              } rounded-3xl shadow-2xl overflow-hidden border backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <h2
                  className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  } flex items-center gap-3`}
                >
                  <span
                    className={`${
                      darkMode
                        ? "bg-gradient-to-r from-gray-700 to-gray-600 text-blue-400"
                        : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
                    } p-3 rounded-xl shadow-lg`}
                  >
                    About
                  </span>
                  Me
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } text-base sm:text-lg leading-relaxed`}
                  >
                    I am an Information Technology student with a passion for
                    solving problems. I specialize in developing efficient
                    solutions to complex challenges and enjoy exploring new
                    technologies to expand my technical knowledge.
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } text-base sm:text-lg leading-relaxed`}
                  >
                    My expertise includes web development, data structures,
                    algorithms, and creating impactful digital experiences that
                    address real-world problems. I am detail-oriented and
                    committed to writing clean, maintainable code while
                    following industry best practices.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                  <a
                    href="./Adinath_Yadav_resume.pdf"
                    className={`flex items-center justify-center gap-3 py-3 sm:py-4 px-6 sm:px-8 ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    } text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-blue-300/50 w-full sm:w-auto`}
                    download="Adinath_Yadav_Resume"
                  >
                    <FileText size={20} />
                    <span>Download Resume</span>
                  </a>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ChevronDown className="w-4 h-4 animate-bounce" />
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
        className="px-4 pb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold mb-10 text-center"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Project 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl overflow-hidden ${
              darkMode ? "border-gray-700" : "border border-gray-100"
            } md:p-8 p-4`}
          >
            <div className="h-64 overflow-hidden">
              <img
                src="/images/project/chatting_application.png"
                alt="Omnifood Project"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="md:p-8 p-4">
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Stranger Live
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  WebRTC
                </span>
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  Socket.io
                </span>
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  Prisma
                </span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-8`}
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
                className={`flex items-center justify-center gap-2 py-3 px-6 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800"
                    : "bg-gradient-to-r from-blue-600 to-blue-800"
                } text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105`}
              >
                <span>View source code</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl overflow-hidden ${
              darkMode ? "border-gray-700" : "border border-gray-100"
            } md:p-8 p-4`}
          >
            <div className="h-64 overflow-hidden">
              <img
                src="/images/project/weather_desktop.png"
                alt="Weather App Project"
                className="w-[100%] h-[100%] mx-auto object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="md:p-8 p-4">
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Weather App
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  HTML
                </span>
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  CSS
                </span>
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  JavaScript
                </span>
                <span
                  className={`px-3 py-1 ${
                    darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  } rounded-full text-sm font-medium`}
                >
                  API
                </span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-8`}
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
                className={`flex items-center justify-center gap-2 py-3 px-6 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800"
                    : "bg-gradient-to-r from-blue-600 to-blue-800"
                } text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105`}
              >
                <span>View Project</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
          <a
            href="#projects"
            className={`flex items-center gap-2 py-3 px-8 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            } rounded-full font-medium transition-all group`}
          >
            <Code
              size={20}
              className={darkMode ? "text-blue-400" : "text-blue-600"}
            />
            <span>View All Projects</span>
            <motion.div
              className="ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.div>
          </a>
        </motion.div>
      </motion.section>

      {/*  Achievements Section */}
      <section
        className="mb-16 sm:mb-24 px-0 sm:px-4"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Professional Achievements
          </span>
        </h2>

        <div
          className={`${
            darkMode
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
              : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
          } rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border backdrop-blur-sm`}
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 gap-4">
            <div
              className={`p-4 rounded-2xl ${
                darkMode ? "bg-gray-700" : "bg-blue-100"
              } shadow-lg`}
            >
              <Award
                size={32}
                className={`${
                  darkMode ? "text-blue-400" : "text-blue-600"
                } sm:w-10 sm:h-10`}
              />
            </div>
            <h3
              className={`text-xl sm:text-2xl font-semibold text-center sm:text-left ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Competitive Programming Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "LeetCode",
                description:
                  "Solved 250+ questions on LeetCode with focus on algorithms, data structures, and optimization techniques",
                color: "yellow",
                bgColor: darkMode ? "bg-gray-700" : "bg-yellow-50",
                iconBg: darkMode ? "bg-gray-600" : "bg-yellow-100",
              },
              {
                title: "CodeChef",
                description:
                  "Achieved 3★ rating on CodeChef through consistent participation in competitive programming contests",
                color: "purple",
                bgColor: darkMode ? "bg-gray-700" : "bg-purple-50",
                iconBg: darkMode ? "bg-gray-600" : "bg-purple-100",
              },
              {
                title: "Codeforces",
                description:
                  "Reached Pupil status on Codeforces by demonstrating strong problem-solving and algorithmic skills",
                color: "green",
                bgColor: darkMode ? "bg-gray-700" : "bg-green-50",
                iconBg: darkMode ? "bg-gray-600" : "bg-green-100",
              },
            ].map((achievement, index) => (
              <div
                key={achievement.title}
                className={`${achievement.bgColor} rounded-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer group`}
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: `all 0.6s ease-out ${0.1 * index}s`,
                }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div
                    className={`p-3 ${achievement.iconBg} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Star
                      size={20}
                      className="text-yellow-500 sm:w-6 sm:h-6"
                      fill="currentColor"
                    />
                  </div>
                  <h4
                    className={`text-lg sm:text-xl font-semibold ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {achievement.title}
                  </h4>
                </div>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
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
