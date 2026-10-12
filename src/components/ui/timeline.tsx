"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
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
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 lg:px-10">
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
            className="flex justify-start pt-8 md:pt-32 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-800">
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
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
