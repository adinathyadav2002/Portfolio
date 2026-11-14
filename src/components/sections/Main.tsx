import {
  Linkedin,
  Github,
  Award,
  FileText,
} from "lucide-react";

export default function Main({ darkMode, setDarkMode }) {
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
                className={`w-full h-full rounded-2xl overflow-hidden border ${darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100"
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
                className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
                  } font-medium block mb-1.5 tracking-wider uppercase`}
              >
                Hello, I am
              </span>

              <h1
                className={`text-2xl sm:text-3xl lg:text-4xl font-semibold my-1.5 tracking-tight ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Adinath Yadav
              </h1>

              <div
                className={`px-3 py-1 mt-1.5 ${darkMode
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
                onClick={() => openInNewTab("https://github.com/adinathyadav2002")}
                className={`p-2 rounded-lg border transition-colors ${darkMode
                  ? "border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  : "border-gray-200 bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </button>
              <button
                onClick={() => openInNewTab("https://linkedin.com/in/adinath-yadav")}
                className={`p-2 rounded-lg border transition-colors ${darkMode
                  ? "border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  : "border-gray-200 bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
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
              className={`${darkMode
                ? "bg-gray-900/90 border-gray-800"
                : "bg-white border-gray-200"
                } rounded-xl shadow-sm overflow-hidden border`}
            >
              <div className="p-6 sm:p-7">
                <h2
                  className={`text-lg sm:text-xl font-semibold mb-4 tracking-tight ${darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                >
                  About Me
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed font-normal">
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    I'm an Information Technology student who enjoys building full-stack
                    web apps and digging into systems and real-time communication. I spend
                    much of my time coding in TypeScript, experimenting with WebSockets & WebRTC,
                    and practicing data structures and algorithms.
                  </p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Whether it's building a real-time chat service, optimizing database
                    queries, or competing in programming contests, I value writing readable,
                    reliable code and shipping tools people can actually use.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href="./Adinath_Yadav_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 py-2 px-4 ${darkMode
                      ? "bg-gray-100 text-gray-900 hover:bg-white"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                      } rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm`}
                  >
                    <FileText size={15} />
                    <span>View Resume</span>
                  </a>

                  <a
                    href="#projects"
                    className={`inline-flex items-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-medium ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                      } transition-colors`}
                  >
                    <span>Explore projects</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            className={`text-xl sm:text-2xl font-semibold tracking-tight ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Professional Achievements
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
              }`}
          >
            Competitive programming and algorithmic problem-solving milestones
          </p>
        </div>

        <div
          className={`${darkMode
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
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-800"
                }`}
            >
              <Award size={20} />
            </div>
            <h3
              className={`text-base sm:text-lg font-semibold text-center sm:text-left ${darkMode ? "text-gray-100" : "text-gray-800"
                }`}
            >
              Competitive Programming Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                platform: "LeetCode",
                metric: "320+ Problems",
                detail: "Focused on graphs, dynamic programming, and data structures.",
                badge: "Active",
              },
              {
                platform: "CodeChef",
                metric: "3★ Rated",
                detail: "Regular participant in Division 2/3 rated contests.",
                badge: "Div 2",
              },
              {
                platform: "Codeforces",
                metric: "Pupil Rank",
                detail: "Consistent rating and speed problem-solving in Div 3/4 rounds.",
                badge: "Pupil",
              },
            ].map((achievement, index) => (
              <div
                key={achievement.platform}
                className={`${darkMode
                  ? "bg-gray-950/40 border-gray-800 hover:border-gray-700"
                  : "bg-white border-gray-200 hover:border-gray-300"
                  } rounded-lg p-5 border transition-colors flex flex-col justify-between`}
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: `all 0.6s ease-out ${0.1 * index}s`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                    >
                      {achievement.platform}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${darkMode
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                    >
                      {achievement.badge}
                    </span>
                  </div>
                  <h4
                    className={`text-base font-semibold mb-1.5 ${darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                  >
                    {achievement.metric}
                  </h4>
                  <p
                    className={`${darkMode ? "text-gray-400" : "text-gray-600"
                      } text-xs leading-relaxed`}
                  >
                    {achievement.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
