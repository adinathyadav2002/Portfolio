// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import React, {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
  useState,
  useEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  } catch {
    gsap.registerPlugin(ScrollTrigger);
  }
}

/* Inline stand-in for @gsap/react's useGSAP. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

type Month = keyof typeof monthOrder;

export type ExperienceItem = {
  id: string;
  year: string;
  month: Month;
  role: string;
  company: string;
  durationMonths: string;
  durationRange: string;
  location: string;
  badge?: string;
  content: string;
  details: string[];
  skills: string[];
};

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
  darkMode?: boolean;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

/* -------------------------------------------------------------------------
   Experience Data (Descending: 2026, 2025, 2024, 2023)
   Exact working duration in full form (e.g. "11 months"):
   ------------------------------------------------------------------------- */
const topJourneyData: ExperienceItem[] = [
  {
    id: "2026-january",
    year: "2026",
    month: "January",
    role: "Software Engineer",
    company: "Prasaar Technologies · Full-time",
    durationMonths: "11 months",
    durationRange: "Jan 2026 – Present",
    location: "Pune / Pimpri-Chinchwad Area · On-site",
    badge: "Present",
    content: "Engineered multi-tenant WhatsApp Business Platform with Meta Cloud API, webhooks & visual flows.",
    details: [
      "Designed and developed a multi-tenant WhatsApp Business Platform using the Meta Cloud API, supporting client onboarding, template management, campaigns, and real-time messaging.",
      "Implemented a scalable webhook processing system to handle incoming messages, delivery/read statuses, interactive replies, and media events with reliable event processing.",
      "Built an advanced WhatsApp Flow Builder with reusable flow components, dynamic forms, Google Sheets integration, and API-based workflow automation.",
      "Developed marketing campaign capabilities with opt-in/opt-out management, audience filtering, template validation, scheduled broadcasts, and delivery analytics.",
    ],
    skills: [
      "Meta Cloud API",
      "Node.js",
      "FastAPI",
      "Webhooks",
      "WhatsApp Flows",
      "PostgreSQL",
      "System Design",
    ],
  },
  {
    id: "2024-august",
    year: "2024",
    month: "August",
    role: "Competitive programming Team Head",
    company: "CodeChef <PCCOE> Chapter",
    durationMonths: "7 months",
    durationRange: "Aug 2024 – Feb 2025",
    location: "PCCOE Pune · On-site",
    badge: "Team Head",
    content: "Led student chapter, organized state-level coding symposiums, hosted algorithmic workshops and mentored 200+ students.",
    details: [
      "Led the competitive programming team and organized college-wide and state-level contests, workshops, and mentoring sessions.",
      "Conducted hands-on workshops on Data Structures, Algorithms, problem-solving paradigms, and contest strategies.",
      "Mentored 200+ students in algorithmic problem solving, dynamic programming, and graph theory.",
      "Planned and executed technical symposiums and coding competitions with hundreds of active participants.",
    ],
    skills: [
      "Event Management",
      "Event Planning",
      "Competitive Programming",
      "Data Structures & Algorithms",
      "Community Leadership",
    ],
  },
];

const bottomJourneyData: ExperienceItem[] = [
  {
    id: "2025-february",
    year: "2025",
    month: "February",
    role: "Software Engineer",
    company: "Eitot Technologies · Internship",
    durationMonths: "11 months",
    durationRange: "Feb 2025 – Dec 2025",
    location: "Pimple Saudagar, Pune · On-site",
    badge: "Internship",
    content: "Cross-platform mobile apps with Flutter, GetX, and Google Gemini AI transliteration.",
    details: [
      "Developed a cross-platform mobile application using Flutter with GetX state management, HTTP/Dio, and flutter_secure_storage for secure authentication and local storage.",
      "Implemented AI-powered transliteration using Google Gemini, caching generated results in the database to minimize repeated API requests and improve performance.",
      "Collaborated on full-stack feature development, bug fixing, testing, and deployment across multiple production applications.",
    ],
    skills: [
      "SQL",
      "PostgreSQL",
      "Flutter",
      "Dart",
      "GetX",
      "Google Gemini AI",
      "Dio / HTTP",
      "Secure Storage",
    ],
  },
  {
    id: "2023-august",
    year: "2023",
    month: "August",
    role: "Competitive programming team member",
    company: "CodeChef <PCCOE> Chapter · Apprenticeship",
    durationMonths: "7 months",
    durationRange: "Aug 2023 – Feb 2024",
    location: "PCCOE Pune · On-site",
    badge: "Apprenticeship",
    content: "Curated algorithmic problem sets, co-organized practice sessions, and peer learning initiatives.",
    details: [
      "Co-organized competitive programming practice sessions, contest preparation, and editorial walkthroughs.",
      "Curated challenging problem sets, test cases, and problem solutions for intra-college coding challenges.",
      "Fostered problem-solving culture among students through peer learning and algorithmic practice.",
    ],
    skills: [
      "Event Planning",
      "Competitive Programming",
      "Problem Setting",
      "C++",
      "Team Collaboration",
    ],
  },
];

/* Sorted descending by year: 2026, 2025, 2024, 2023 */
const allJourneyItems: ExperienceItem[] = [
  ...topJourneyData,
  ...bottomJourneyData,
].sort((a, b) => {
  const yearDiff = Number(b.year) - Number(a.year);
  if (yearDiff !== 0) return yearDiff;
  return monthOrder[b.month] - monthOrder[a.month];
});

/* -------------------------------------------------------------------------
   Horizontal GSAP Scroll Timeline Component (Default Export)
   ------------------------------------------------------------------------- */
export default function Timeline({
  title = "Experience",
  periodLabel = "2023 — 2026",
  textColor,
  mutedTextColor,
  activeColor = "#6366f1",
  backgroundColor,
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  imageAlt = "Modern technology workspace",
  duration,
  scrollDuration = 1.2,
  darkMode = true,
}: TimelineProps) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor ?? (darkMode ? "#ffffff" : "#111827"),
    backgroundColor: backgroundColor ?? (darkMode ? "#111827" : "#f9fafb"),
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor ?? (darkMode ? "#9ca3af" : "#6b7280"),
  };

  useGSAP(() => {
    // Only run horizontal scroll pin on desktop (>= 768px)
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const section = sectionRef.current;
    if (!section) return;

    const slidePercent = -8;
    const slideEnd = "60% bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: slideEnd,
        scrub: true,
      },
      defaults: {
        ease: "none",
      },
    });

    tl.fromTo(
      wholeSliderRef.current,
      { xPercent: 0 },
      { xPercent: slidePercent }
    );

    if (reducedMotion) {
      gsap.set(".journey-line", { width: "100%" });
      return;
    }

    gsap.to(".journey-line", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 15%",
        scrub: true,
      },
    });
  }, { dependencies: [reducedMotion], scope: sectionRef });

  useGSAP(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const section = sectionRef.current;
    if (!section) return;

    // Ensure all years, titles, badges, and descriptions are fully visible immediately
    allJourneyItems.forEach((item) => {
      gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
      gsap.set(`.description-${item.id}`, {
        opacity: 1,
        clearProps: "transform",
      });
      gsap.set(`.jl-${item.id}`, { scaleY: 1 });
      gsap.set(`.jd-${item.id}`, { scale: 1 });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef });

  return (
    <>
      {/* =========================================================================
          DESKTOP VIEW (>= 768px): Horizontal GSAP Scroll Timeline
          ========================================================================= */}
      <section
        ref={sectionRef}
        id="journey"
        className="hidden md:block h-[80vw] w-screen relative left-1/2 -translate-x-1/2 overflow-x-clip"
        style={sectionStyle}
      >
        <div className="h-screen w-screen sticky top-[0%] pt-[6%] overflow-hidden">
          <div
            ref={wholeSliderRef}
            className="mr-[2vw] flex h-[36vw] w-[108vw] items-center gap-[3vw] px-[3vw]"
          >
            {/* Lead Image Card */}
            <div className="h-full w-[20vw] shrink-0 overflow-hidden rounded-[1vw] border border-gray-200 dark:border-gray-800 shadow-md">
              <img
                src={imageUrl}
                alt={imageAlt}
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Timeline Track & Cards */}
            <div className="relative h-full flex-1">
              {/* Horizontal Central Line */}
              <div className="w-[36vw] absolute left-[15vw] top-[50%] -translate-y-1/2 flex items-center h-fit pointer-events-none">
                <div
                  className="h-px w-[0%] rounded-full journey-line"
                  style={activeStyle}
                />
              </div>

              {/* Top Half Cards (2026, 2024) */}
              <div className="flex h-1/2 w-full items-center justify-start gap-[1vw]">
                <div className="h-full w-[14vw] shrink-0 pt-[1.5vw]">
                  <h2 className="w-[90%] font-display text-[2.4vw] font-bold leading-[0.95] tracking-tight">
                    {title}
                  </h2>
                </div>

                <div className="flex h-full gap-x-[7vw]">
                  {topJourneyData.map((item) => (
                    <div
                      key={`top-${item.id}`}
                      className="relative h-full w-[26vw] px-[1.5vw]"
                    >
                      {/* Decorative Line & Dot */}
                      <div className="w-full absolute left-0 bottom-0 top-0 h-full pointer-events-none flex flex-col justify-end items-start">
                        <div
                          className={`h-[90%] w-px origin-bottom rounded-full jl-${item.id}`}
                          style={activeStyle}
                        />
                        <div
                          className={`size-[0.8vw] -translate-x-[calc(50%-0.5px)] translate-y-1/2 relative rounded-full jd-${item.id}`}
                          style={activeStyle}
                        />
                      </div>

                      {/* Content Box */}
                      <div className="relative z-30 pointer-events-auto mt-[-1vw] space-y-[0.5vw]">
                        {/* Year + Badges */}
                        <div className="flex items-center flex-wrap gap-2">
                          <h4
                            className={`title-${item.id} font-display text-[2.2vw] font-bold leading-none opacity-100`}
                          >
                            {item.year}
                          </h4>
                          <span className="text-[0.85vw] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                            {item.durationMonths}
                          </span>
                          {item.badge && (
                            <span className="text-[0.8vw] font-mono px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/80">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Date Range */}
                        <div className="text-[0.9vw] font-mono text-gray-400 dark:text-gray-400 flex items-center gap-1.5 font-medium">
                          <Calendar size={12} className="shrink-0 text-indigo-400" />
                          <span>{item.durationRange}</span>
                        </div>

                        {/* Role & Company */}
                        <p className="text-[1.1vw] font-semibold text-indigo-400 dark:text-indigo-300 leading-snug">
                          {item.role} · <span className="text-gray-300 font-normal">{item.company}</span>
                        </p>

                        {/* Short Description */}
                        <p
                          className={`description-${item.id} w-[95%] text-[0.95vw] leading-[1.3] opacity-100`}
                          style={mutedTextStyle}
                        >
                          {item.content}
                        </p>

                        {/* View in Detail Button */}
                        <div className="pt-2 relative z-40 pointer-events-auto">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedExperience(item);
                            }}
                            onPointerDown={(e) => {
                              e.stopPropagation();
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.85vw] font-mono font-semibold border border-indigo-500/50 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 pointer-events-auto"
                          >
                            <span>View in detail</span>
                            <span aria-hidden="true">&rarr;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Half Cards (2025, 2023) */}
              <div className="h-1/2 flex items-center justify-start w-full">
                <div className="w-[14vw] shrink-0 pt-[1.5vw] h-full">
                  <p
                    className="font-mono text-[1.2vw] leading-none"
                    style={mutedTextStyle}
                  >
                    {periodLabel}
                  </p>
                </div>

                <div className="flex h-full gap-x-[7vw] ml-[3.5vw]">
                  {bottomJourneyData.map((item) => (
                    <div
                      key={`bottom-${item.id}`}
                      className="relative h-full w-[26vw] px-[1.5vw]"
                    >
                      {/* Decorative Line & Dot */}
                      <div className="w-full absolute left-0 bottom-0 top-0 h-full pointer-events-none flex flex-col justify-start items-start">
                        <div
                          className={`size-[0.8vw] -translate-x-[calc(50%-0.5px)] -translate-y-1/2 relative rounded-full jd-${item.id}`}
                          style={activeStyle}
                        />
                        <div
                          className={`h-[90%] origin-top w-px rounded-full jl-${item.id}`}
                          style={activeStyle}
                        />
                      </div>

                      {/* Content Box */}
                      <div className="relative z-30 pointer-events-auto pt-[1vw] space-y-[0.5vw]">
                        {/* Year + Badges */}
                        <div className="flex items-center flex-wrap gap-2">
                          <h4
                            className={`title-${item.id} font-display text-[2.2vw] font-bold leading-none opacity-100`}
                          >
                            {item.year}
                          </h4>
                          <span className="text-[0.85vw] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                            {item.durationMonths}
                          </span>
                          {item.badge && (
                            <span className="text-[0.8vw] font-mono px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/80">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Date Range */}
                        <div className="text-[0.9vw] font-mono text-gray-400 dark:text-gray-400 flex items-center gap-1.5 font-medium">
                          <Calendar size={12} className="shrink-0 text-indigo-400" />
                          <span>{item.durationRange}</span>
                        </div>

                        {/* Role & Company */}
                        <p className="text-[1.1vw] font-semibold text-indigo-400 dark:text-indigo-300 leading-snug">
                          {item.role} · <span className="text-gray-300 font-normal">{item.company}</span>
                        </p>

                        {/* Short Description */}
                        <p
                          className={`description-${item.id} w-[95%] text-[0.95vw] leading-[1.3] opacity-100`}
                          style={mutedTextStyle}
                        >
                          {item.content}
                        </p>

                        {/* View in Detail Button */}
                        <div className="pt-2 relative z-40 pointer-events-auto">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedExperience(item);
                            }}
                            onPointerDown={(e) => {
                              e.stopPropagation();
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.85vw] font-mono font-semibold border border-indigo-500/50 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 pointer-events-auto"
                          >
                            <span>View in detail</span>
                            <span aria-hidden="true">&rarr;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VIEW (< 768px): Vertical Chronological Timeline Cards
          ========================================================================= */}
      <div className="block md:hidden w-full px-4 sm:px-6 py-6" style={sectionStyle}>
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2
              className={`text-2xl font-bold tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <span
              className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                darkMode
                  ? "border-gray-700 bg-gray-800/80 text-gray-300"
                  : "border-gray-300 bg-gray-100 text-gray-700"
              }`}
            >
              {periodLabel}
            </span>
          </div>

          {/* Lead Image Banner */}
          <div className="w-full h-40 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vertical Milestones */}
        <div className="relative pl-6 space-y-5 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-indigo-500/40">
          {allJourneyItems.map((item) => (
            <div key={`mobile-${item.id}`} className="relative group">
              {/* Milestone Node */}
              <div
                className="absolute -left-[19px] top-1.5 size-3 rounded-full border-2 border-gray-900 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                style={activeStyle}
              />

              {/* Card */}
              <div
                className={`p-4 rounded-xl border backdrop-blur-sm space-y-2.5 shadow-sm ${
                  darkMode
                    ? "border-gray-800 bg-gray-900/80 text-gray-100"
                    : "border-gray-200 bg-white text-gray-900"
                }`}
              >
                {/* Year + Duration Badge + Status Badge */}
                <div className="flex items-center flex-wrap gap-2">
                  <span
                    className={`font-display text-lg font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-500 dark:text-emerald-400">
                    {item.durationMonths}
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        darkMode
                          ? "border-gray-700 bg-gray-800 text-gray-300"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Date range */}
                <div
                  className={`text-xs font-mono flex items-center gap-1.5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Calendar size={12} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
                  <span>{item.durationRange}</span>
                </div>

                {/* Role & Company */}
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 leading-snug">
                  {item.role} ·{" "}
                  <span
                    className={`font-normal ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.company}
                  </span>
                </p>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.content}
                </p>

                {/* View in Detail Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedExperience(item);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border border-indigo-500/50 bg-indigo-600/15 hover:bg-indigo-600 text-indigo-600 dark:text-indigo-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>View in detail</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Details Modal Dialog */}
      <Dialog
        open={!!selectedExperience}
        onOpenChange={(open) => {
          if (!open) setSelectedExperience(null);
        }}
      >
        <DialogContent className="z-[1000] max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 p-6 sm:p-8 shadow-2xl">
          {selectedExperience && (
            <div>
              {/* Header */}
              <DialogHeader className="pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                      {selectedExperience.durationMonths}
                    </span>
                    {selectedExperience.badge && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {selectedExperience.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-400">
                    <Clock size={12} />
                    <span>{selectedExperience.durationRange}</span>
                  </div>
                </div>

                <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight mt-1">
                  {selectedExperience.role}
                </DialogTitle>

                <DialogDescription className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 mt-0.5">
                  {selectedExperience.company}
                </DialogDescription>

                {selectedExperience.location && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-indigo-400" />
                    <span>{selectedExperience.location}</span>
                  </p>
                )}
              </DialogHeader>

              {/* Working Duration Highlight Box */}
              <div className="mt-4 p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 block">
                    Total Time Worked
                  </span>
                  <span className="text-sm font-semibold text-emerald-500 dark:text-emerald-400">
                    {selectedExperience.durationMonths}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 block">
                    Tenure
                  </span>
                  <span className="text-xs font-mono text-gray-700 dark:text-gray-300">
                    {selectedExperience.durationRange}
                  </span>
                </div>
              </div>

              {/* Detailed Responsibilities */}
              <div className="py-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {selectedExperience.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills / Tech Stack */}
              {selectedExperience.skills && selectedExperience.skills.length > 0 && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedExperience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

/* -------------------------------------------------------------------------
   Preserved Vertical Timeline for Achievements Section Compatibility
   ------------------------------------------------------------------------- */
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const VerticalTimeline = ({
  data,
  darkMode,
}: {
  data: TimelineEntry[];
  darkMode: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={`w-full font-sans md:px-10`} ref={containerRef}>
      <div className="max-w-6xl mx-auto pt-8 pb-4 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-white max-w-4xl tracking-tight">
          My Achievements
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm max-w-sm">
          These achievements are just a glimpse of my journey so far. I'm
          excited to keep learning, growing, and taking on new challenges ahead!
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-14 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-800">
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:neutral-700" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-2xl font-semibold text-neutral-500 dark:text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-3 text-left font-semibold text-neutral-500 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalTimeline as Timeline };
