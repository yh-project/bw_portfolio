"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import profile from "./assets/profile.png";

export default function SideMenu() {
  const [state, setState] = useState("Home");
  return (
    <div className="w-[270px] h-[550px] bg-white shadow-figma rounded-2xl flex flex-col items-center pt-[30px]">
      <Image src={profile} alt="profile" />
      <div className="w-[200px] mt-8">
        <Link href="/">
          <div
            className={`w-full h-9 border-b-2 font-semibold text-center cursor-pointer ${state === "Home" ? "text-primary border-b-primary" : "text-third/50 border-b-third/30"}`}
            onClick={() => setState("Home")}
          >
            Home
          </div>
        </Link>
        <Link href="about-me">
          <div
            className={`w-full h-9 border-b-2 font-semibold text-center cursor-pointer mt-7 ${state === "AboutMe" ? "text-primary border-b-primary" : "text-secondary/50 border-b-third/30"}`}
            onClick={() => setState("AboutMe")}
          >
            About Me
          </div>
        </Link>
        <Link href="skills">
          <div
            className={`w-full h-9 border-b-2 font-semibold text-center cursor-pointer mt-7 ${state === "Skills" ? "text-primary border-b-primary" : "text-secondary/50 border-b-third/30"}`}
            onClick={() => setState("Skills")}
          >
            Skills
          </div>
        </Link>
        <Link href="projects">
          <div
            className={`w-full h-9 border-b-2 font-semibold text-center cursor-pointer mt-7 ${state === "Projects" ? "text-primary border-b-primary" : "text-secondary/50 border-b-third/30"}`}
            onClick={() => setState("Projects")}
          >
            Projects
          </div>
        </Link>
        <Link href="contact">
          <div
            className={`w-full h-9 border-b-2 font-semibold text-center cursor-pointer mt-7 ${state === "Contact" ? "text-primary border-b-primary" : "text-secondary/50 border-b-third/30"}`}
            onClick={() => setState("Contact")}
          >
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
}
