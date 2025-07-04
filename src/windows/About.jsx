import React from "react";
import WindowContainer from "../components/WindowContainer";
import { aboutContent } from "../content";
import { Typewriter } from "react-simple-typewriter";
import { User, FileText, Linkedin, Github } from "lucide-react";

export default function AboutWindow({ onClose, onClick, index }) {
  return (
    <WindowContainer
      title="About Me"
      onClose={onClose}
      onClick={onClick}
      index={index}
      width={400}
      height={500}
    >
      <div className="flex flex-col items-center justify-center text-center p-8 bg-neutral-900/60 backdrop-blur-md text-white h-full">
        {/* Person Icon */}
        <div className="bg-neutral-800 p-4 rounded-full mb-10">
          <User className="w-12 h-12 text-white" />
        </div>

        {/* Typewriter Name + Titles */}
        <h1 className="text-xl font-semibold mb-2">{aboutContent.name}</h1>
        <p className="text-lg text-purple-300 font-medium mb-4">
          <Typewriter
            words={aboutContent.titles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={500}
          />
        </p>

        {/* Minimal Details */}
        <div className="text-sm text-neutral-400 mb-6 space-y-1">
          <p>{aboutContent.location}</p>
          <p>{aboutContent.phone}</p>
          <p>{aboutContent.email}</p>
        </div>

        {/* Circular Icon Buttons */}
        <div className="flex space-x-4">
          <a
            href={aboutContent.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
          >
            <FileText className="w-5 h-5 text-white" />
          </a>
          <a
            href={aboutContent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href={aboutContent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </WindowContainer>
  );
}
