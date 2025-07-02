import React, { useEffect, useState } from "react";

export default function StartupAnimation({ onFinish }) {
  const [displayedText, setDisplayedText] = useState("");
  const [fadeText, setFadeText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const fullText = "Virain Bawa";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setFadeText(true);
          setTimeout(() => {
            setFadeOut(true);
          }, 800);
        }, 1000);
      }
    }, 80);

    const totalTime = fullText.length * 80 + 1000 + 800 + 1500;
    const removeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, totalTime);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(removeTimer);
    };
  }, [onFinish, fullText]);

  return (
    <div
      className={`
        fixed inset-0 bg-white flex items-center justify-center z-50
        transition-opacity duration-1500
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <h1
        className={`
          text-4xl font-bold text-black
          transition-opacity duration-700
          ${fadeText ? "opacity-0" : "opacity-100"}
        `}
      >
        {displayedText}
      </h1>
    </div>
  );
}
