import {
  Linkedin,
  Github,
  Award,
  FileText,
  ArrowRight,
  Briefcase,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Cpu,
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
                  Software Engineer at Prasaar Technologies, B.Tech graduate in IT from Savitribai Phule Pune University. Building scalable cloud platforms, multi-tenant architectures, and real-time systems.
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
      <section className="mb-24 sm:mb-32 px-0 relative scroll-mt-24" id="experience">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-3.5 border ${
              darkMode
                ? "bg-gray-800/60 text-gray-300 border-gray-700/80"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            <Briefcase size={13} />
            <span>Experience</span>
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <p
            className={`mt-2 text-xs sm:text-sm md:text-base ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } max-w-lg mx-auto`}
          >
            Engineering scalable cloud platforms, automated workflow pipelines, and production applications
          </p>
        </div>

        {/* Experience Cards Stack - Creative Bento Grid */}
        <div className="space-y-8 sm:space-y-10">
          {/* Card 1: Prasaar Technologies */}
          <div
            className={`relative rounded-2xl border p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
              darkMode
                ? "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-black/40"
                : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-xl"
            } backdrop-blur-md`}
          >
            {/* Top Bar: Role, Company & Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border ${
                      darkMode
                        ? "bg-gray-800/80 text-gray-300 border-gray-700/80"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>Present Role</span>
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Software Engineer
                </h3>
                <p className="text-sm sm:text-base font-medium text-gray-400 mt-1">
                  Prasaar Technologies
                </p>
              </div>

              <div className="self-start sm:self-auto">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full border ${
                    darkMode
                      ? "bg-gray-800/60 text-gray-300 border-gray-700/80"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }`}
                >
                  <Calendar size={13} />
                  <span>Jan 2026 – Present</span>
                </span>
              </div>
            </div>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Layers size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    WhatsApp Business Platform
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Architected a multi-tenant cloud platform using the Meta Cloud API for tenant onboarding, template approval workflows, campaigns, and real-time messaging.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Workflow size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Scalable Webhook Pipeline
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Engineered an event-driven webhook processing engine to ingest incoming messages, delivery/read statuses, interactive replies, and media events reliably.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Cpu size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    WhatsApp Flow Builder
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Built a modular visual flow composer with reusable form components, dynamic validation, Google Sheets integration, and API-driven automation.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <CheckCircle2 size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Campaign & Delivery Telemetry
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Developed broadcast capabilities with user opt-in/opt-out management, audience segmentation filtering, template verification, and delivery analytics.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div
              className={`flex flex-wrap items-center gap-2 pt-4 border-t ${
                darkMode ? "border-gray-800/80" : "border-gray-200/80"
              }`}
            >
              <span
                className={`text-xs font-mono mr-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Technologies:
              </span>
              {[
                "Meta Cloud API",
                "Node.js",
                "FastAPI",
                "Webhooks",
                "WhatsApp Flows",
                "Event Architecture",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                    darkMode
                      ? "bg-gray-800/50 text-gray-300 border-gray-700/60 hover:border-gray-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Eitot Technologies */}
          <div
            className={`relative rounded-2xl border p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
              darkMode
                ? "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-black/40"
                : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-xl"
            } backdrop-blur-md`}
          >
            {/* Top Bar: Role, Company & Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border ${
                      darkMode
                        ? "bg-gray-800/80 text-gray-300 border-gray-700/80"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    <span>Internship</span>
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Software Development Intern
                </h3>
                <p className="text-sm sm:text-base font-medium text-gray-400 mt-1">
                  Eitot Technologies
                </p>
              </div>

              <div className="self-start sm:self-auto">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full border ${
                    darkMode
                      ? "bg-gray-800/60 text-gray-300 border-gray-700/80"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }`}
                >
                  <Calendar size={13} />
                  <span>Feb 2025 – Dec 2025</span>
                </span>
              </div>
            </div>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Sparkles size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Cross-Platform Flutter
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Developed mobile features with GetX reactive state management, Dio HTTP client, and encrypted local storage.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Cpu size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Gemini AI Integration
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Integrated Google Gemini AI for multilingual transliteration with intelligent database caching to optimize latency.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-950/40 border-gray-800/80 hover:border-gray-700"
                    : "bg-gray-50/80 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200"
                        : "bg-gray-100 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Layers size={14} />
                  </div>
                  <h4
                    className={`font-semibold text-xs sm:text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Production Engineering
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Collaborated on full-stack feature delivery, testing suites, bug diagnostics, and continuous production releases.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div
              className={`flex flex-wrap items-center gap-2 pt-4 border-t ${
                darkMode ? "border-gray-800/80" : "border-gray-200/80"
              }`}
            >
              <span
                className={`text-xs font-mono mr-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Technologies:
              </span>
              {[
                "Flutter",
                "Dart",
                "GetX",
                "Google Gemini AI",
                "Dio / HTTP",
                "Secure Storage",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                    darkMode
                      ? "bg-gray-800/50 text-gray-300 border-gray-700/60 hover:border-gray-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {tech}
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
