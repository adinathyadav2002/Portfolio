import {
  Instagram,
  Linkedin,
  Github,
  Award,
  FileText,
  Star,
  Code,
  ExternalLink,
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
      {/* Hero Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Left Column - Profile Image & Social Links */}
          <motion.div
            className="w-full md:w-2/5 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image with animated gradient border */}
            <div className="relative mb-8 group w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"></div>
              <div
                className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
                  darkMode ? "border-gray-800" : "border-white"
                } shadow-xl`}
              >
                <img
                  src="/images/my_image_1.png"
                  alt="Adinath Yadav"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="text-center mb-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } font-light`}
              >
                Hello, I am
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-5xl font-bold my-3 font-gamaali bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Adinath Yadav
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`px-5 py-2 ${
                  darkMode ? "bg-gray-800" : "bg-blue-50"
                } rounded-full inline-block`}
              >
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } uppercase font-semibold tracking-wide`}
                >
                  B.Tech. in Information & Technology
                </span>
              </motion.div>
            </div>

            {/* Social Media Links with improved hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-2"
            >
              <button
                onClick={() => openInNewTab("https://instagram.com/")}
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600"
                    : "bg-gradient-to-br from-pink-500 to-purple-600"
                } text-white shadow-lg transform transition-all hover:scale-110 hover:shadow-pink-300/50`}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </button>
              <button
                onClick={() => openInNewTab("https://linkedin.com/")}
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
                    : "bg-gradient-to-br from-blue-500 to-blue-700"
                } text-white shadow-lg transform transition-all hover:scale-110 hover:shadow-blue-300/50`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={() => openInNewTab("https://github.com/")}
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
                    : "bg-gradient-to-br from-gray-700 to-gray-900"
                } text-white shadow-lg transform transition-all hover:scale-110 hover:shadow-gray-400/30`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - About Me */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-2xl shadow-xl overflow-hidden ${
                darkMode ? "border-gray-700" : "border border-gray-100"
              }`}
            >
              <div className="p-10">
                <h2
                  className={`text-3xl font-bold mb-8 ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  } flex items-center gap-3`}
                >
                  <span
                    className={`${
                      darkMode
                        ? "bg-gray-700 text-blue-400"
                        : "bg-blue-100 text-blue-800"
                    } p-2 rounded-lg`}
                  >
                    About
                  </span>{" "}
                  Me
                </h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } text-lg leading-relaxed mb-6`}
                >
                  I am an information technology student with a passion for
                  solving problems. I specialize in developing efficient
                  solutions to complex challenges and enjoy exploring new
                  technologies to expand my technical knowledge.
                </p>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } text-lg leading-relaxed mb-8`}
                >
                  My expertise includes web development, data structures,
                  algorithms, and creating impactful digital experiences that
                  address real-world problems. I am detail-oriented and
                  committed to writing clean, maintainable code while following
                  industry best practices.
                </p>

                <div className="flex items-center mt-8">
                  <a
                    href="/resume.pdf"
                    className={`flex items-center gap-2 py-3 px-8 ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800"
                        : "bg-gradient-to-r from-blue-600 to-blue-800"
                    } text-white rounded-full font-medium shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-105`}
                    download="Adinath_Yadav_Resume"
                  >
                    <FileText size={20} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-24 px-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold mb-10 text-center"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Professional Achievements
          </span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl p-10 ${
            darkMode ? "border-gray-700" : "border border-gray-100"
          }`}
        >
          <div className="flex items-center justify-center mb-8">
            <Award
              size={40}
              className={`${darkMode ? "text-blue-400" : "text-blue-600"} mr-3`}
            />
            <h3
              className={`text-2xl font-semibold ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Coding Proficiency
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-blue-50"
              } rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 ${
                    darkMode ? "bg-gray-600" : "bg-blue-100"
                  } rounded-full mr-4`}
                >
                  <Star
                    size={24}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  LeetCode
                </h4>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Solved 250+ Questions on LeetCode with focus on algorithms, data
                structures, and optimization techniques
              </p>
            </div>

            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-purple-50"
              } rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 ${
                    darkMode ? "bg-gray-600" : "bg-purple-100"
                  } rounded-full mr-4`}
                >
                  <Star
                    size={24}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  CodeChef
                </h4>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Achieved 3
                <Star
                  size={12}
                  className="text-yellow-500 mx-1"
                  fill="currentColor"
                />{" "}
                rating on CodeChef through consistent participation in
                competitions
              </p>
            </div>

            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-green-50"
              } rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 ${
                    darkMode ? "bg-gray-600" : "bg-green-100"
                  } rounded-full mr-4`}
                >
                  <Star
                    size={24}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Codeforces
                </h4>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Reached Pupil status on Codeforces by demonstrating strong
                competitive programming skills
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

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
            } p-8`}
          >
            <div className="h-64 overflow-hidden">
              <img
                src="/images/project/omnifood_desktop.webp"
                alt="Omnifood Project"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Omnifood
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
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-8`}
              >
                A fully responsive food delivery website clone with modern UI
                components and complete functionality. Implemented with best
                practices for web accessibility and performance optimization.
                Deployed and hosted on Netlify.
              </p>
              <a
                href="https://omnifoodtry.netlify.app/"
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

          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-xl overflow-hidden ${
              darkMode ? "border-gray-700" : "border border-gray-100"
            } p-8`}
          >
            <div className="h-64 overflow-hidden">
              <img
                src="/images/project/weather_desktop.png"
                alt="Weather App Project"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8">
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
    </main>
  );
}
