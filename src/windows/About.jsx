import React from "react";
import WindowContainer from "../components/WindowContainer";
import { aboutContent } from "../content";
import { Typewriter } from "react-simple-typewriter";

export default function AboutWindow({ onClose, onClick, index }) {
  const defaultWidth = Math.min(window.innerWidth - 40, 800);
  const defaultHeight = Math.min(window.innerHeight - 100, 650);
  return (
    <WindowContainer
      title="About Me"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div className="flex-1 overflow-auto">
        {/* About Me Section */}
        <section
          className="
              bg-purple-600 dark:bg-purple-700
              text-white
              px-30 py-30
              text-center
            "
        >
          <div className="text-sm max-w-prose mx-auto py-10">
            <p className="text-lg font-semibold">
              Hi, I'm Virain, a{" "}
              <span className="text-yellow-300">
                <Typewriter
                  words={[
                    "Developer.",
                    "Designer.",
                    "Software Engineering Student.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
          </div>
          <p className="text-sm max-w-prose mx-auto">{aboutContent.about}</p>
        </section>

        {/* Experience Section */}
        <section
          className="
              bg-neutral-100 dark:bg-neutral-800
              text-neutral-900 dark:text-neutral-100
              px-6 py-6
            "
        >
          <h3 className="text-lg font-semibold mb-2 border-b border-purple-500 inline-block">
            Experience
          </h3>
          <p className="text-sm mt-2">{aboutContent.experience}</p>
        </section>

        {/* Projects Section */}
        <section
          className="
              bg-neutral-50 dark:bg-neutral-900
              text-neutral-900 dark:text-neutral-100
              px-6 py-6
            "
        >
          <h3 className="text-lg font-semibold mb-2 border-b border-purple-500 inline-block">
            Projects
          </h3>
          <p className="text-sm mt-2">{aboutContent.projects}</p>
        </section>

        {/* Skills Section */}
        <section
          className="
              bg-neutral-100 dark:bg-neutral-800
              text-neutral-900 dark:text-neutral-100
              px-6 py-6
            "
        >
          <h3 className="text-lg font-semibold mb-2 border-b border-purple-500 inline-block">
            Skills
          </h3>
          <p className="text-sm mt-2">{aboutContent.skills}</p>
        </section>
      </div>
    </WindowContainer>
  );
}
