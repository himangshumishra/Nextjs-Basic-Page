"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.10,
        }}
        className={cn(
          "flex w-auto fixed top-10 inset-x-0 ml-3 mr-3 border border-transparent dark:border-white/[0.2] rounded-[20px] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
          className
        )}
      >
        <h1 className="items-start mr-7">Navbar</h1>

        <div className="flex justify-center items-center gap-3">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex justify-between space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <div className="flex">
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </div>
            </Link>
          ))}
          <div className="flex justify-center items-center ml-24 gap-2">
            <div className="sm:hidden mr-24 mb-16 ">
              <HamburgerMenu/>
            </div>

            <button className="hidden sm:block border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span>Login</span>
            </button>
            <button className="hidden sm:block border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full bg-purple-600">
              <span>Signup</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
