import {
  Linkedin,
  Github,
  Award,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Main({ darkMode, setDarkMode }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 md:pt-14 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="mb-24 sm:mb-32 relative">
        <div
          className="flex flex-col md:flex-row items-center justify-center relative max-w-5xl mx-auto"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Left - Portrait Image without border */}
          <div
            className="relative shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-[360px] sm:h-[430px] md:h-[470px] lg:h-[500px] overflow-hidden"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <img
              src="/images/my_image_2.jpeg"
              alt="Adinath Yadav"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right - Name overlapping image & Bio */}
          <div
            className="relative -mt-8 md:mt-0 z-10 flex flex-col justify-center pt-4 md:pt-0 w-full md:w-auto"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            {/* ONLY the Name overlaps the Image */}
            <div className="relative md:-ml-20 lg:-ml-28 mb-8 md:mb-12">
              <h1
                className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Adinath
                <span className="block mt-1">
                  Yadav
                </span>
              </h1>
            </div>

            {/* Other parts - on the right, NOT on the image */}
            <div className="md:pl-6 lg:pl-10 flex flex-col">
              {/* Circular Arrow + Bio Paragraph */}
              <div className="flex items-center gap-5 sm:gap-6">
                <a
                  href="#projects"
                  aria-label="Explore Projects"
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border ${darkMode
                    ? "border-gray-500/80 hover:border-white bg-white/10 hover:bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                    : "border-gray-400 hover:border-gray-900 bg-black/5 hover:bg-black/10 text-gray-900 shadow-[0_0_20px_rgba(0,0,0,0.06)]"
                    } backdrop-blur-md flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 group shadow-sm`}
                >
                  <ArrowRight
                    size={22}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <p
                  className={`text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal max-w-xs sm:max-w-sm md:max-w-md ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  Software Engineer at Prasaar Technologies and B.Tech IT student at PCCOE Pune. Building scalable cloud platforms, multi-tenant architectures, and real-time systems.
                </p>
              </div>

              {/* Elegant Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-8 sm:mt-10">
                <a
                  href="./Adinath_Yadav_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 py-2 px-4 sm:py-2.5 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${darkMode
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                >
                  <FileText size={15} />
                  <span>View Resume</span>
                </a>

                <button
                  onClick={() => openInNewTab("https://github.com/adinathyadav2002")}
                  className={`inline-flex items-center gap-2 py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${darkMode
                    ? "border-gray-700/80 bg-gray-900/60 hover:bg-gray-800 text-gray-200 hover:text-white hover:border-gray-500"
                    : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-gray-400"
                    }`}
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={() => openInNewTab("https://www.linkedin.com/in/adinath-yadav-50a294251/")}
                  className={`inline-flex items-center gap-2 py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${darkMode
                    ? "border-gray-700/80 bg-gray-900/60 hover:bg-gray-800 text-gray-200 hover:text-white hover:border-gray-500"
                    : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-gray-400"
                    }`}
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20 sm:mb-28 px-0" id="experience">
        <div className="mb-8 text-center">
          <h2
            className={`text-xl sm:text-2xl font-semibold tracking-tight ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Experience
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
              }`}
          >
            Software engineering roles delivering scalable cloud architectures and real-time applications
          </p>
        </div>

        <div className="space-y-6">
          {/* Prasaar Technologies */}
          <div
            className={`rounded-xl p-6 sm:p-7 border shadow-sm transition-colors ${darkMode
                ? "bg-gray-900/90 border-gray-800 hover:border-gray-700/80"
                : "bg-white border-gray-200 hover:border-gray-300"
              }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3
                  className={`text-base sm:text-lg font-semibold tracking-tight ${darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                >
                  Software Engineer
                </h3>
                <span className="text-xs sm:text-sm font-medium text-indigo-500 dark:text-indigo-400">
                  Prasaar Technologies
                </span>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full self-start sm:self-auto ${darkMode
                    ? "bg-gray-800 text-gray-300 border border-gray-700"
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
              >
                Jan 2026 – Present
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Designed and developed a multi-tenant <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>WhatsApp Business Platform</strong> using the <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>Meta Cloud API</strong>, supporting client onboarding, template management, campaigns, and real-time messaging.
                </span>
              </li>
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Implemented a scalable <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>webhook processing system</strong> to handle incoming messages, delivery/read statuses, interactive replies, and media events with reliable event processing.
                </span>
              </li>
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Built an advanced <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>WhatsApp Flow Builder</strong> with reusable flow components, dynamic forms, Google Sheets integration, and API-based workflow automation.
                </span>
              </li>
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Developed marketing campaign capabilities with <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>opt-in/opt-out management</strong>, audience filtering, template validation, scheduled broadcasts, and delivery analytics.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800/80">
              {["Meta Cloud API", "Node.js", "Webhooks", "Workflow Automation", "WhatsApp Flows", "System Architecture"].map((skill) => (
                <span
                  key={skill}
                  className={`text-[11px] px-2.5 py-0.5 rounded-md ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Eitot Technologies */}
          <div
            className={`rounded-xl p-6 sm:p-7 border shadow-sm transition-colors ${darkMode
                ? "bg-gray-900/90 border-gray-800 hover:border-gray-700/80"
                : "bg-white border-gray-200 hover:border-gray-300"
              }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3
                  className={`text-base sm:text-lg font-semibold tracking-tight ${darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                >
                  Software Development Intern
                </h3>
                <span className="text-xs sm:text-sm font-medium text-indigo-500 dark:text-indigo-400">
                  Eitot Technologies
                </span>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full self-start sm:self-auto ${darkMode
                    ? "bg-gray-800 text-gray-300 border border-gray-700"
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
              >
                Feb 2025 – Dec 2025
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Developed a cross-platform mobile application using <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>Flutter</strong> with <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>GetX</strong> state management, <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>HTTP/Dio</strong>, and <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>flutter_secure_storage</strong> for secure authentication and local storage.
                </span>
              </li>
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Implemented AI-powered transliteration using <strong className={darkMode ? "text-gray-200" : "text-gray-900"}>Google Gemini</strong>, caching generated results in the database to minimize repeated API requests and improve performance.
                </span>
              </li>
              <li className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0" />
                <span>
                  Collaborated on full-stack feature development, bug fixing, testing, and deployment across multiple production applications.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800/80">
              {["Flutter", "GetX", "Google Gemini AI", "Dio / HTTP", "Mobile App Dev", "Secure Storage"].map((skill) => (
                <span
                  key={skill}
                  className={`text-[11px] px-2.5 py-0.5 rounded-md ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        className="px-0"
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
            Competitive Achievements
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
