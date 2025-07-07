import React, { useEffect, useState } from "react";

export default function StartupAnimation({ onFinish }) {
  const [displayedText, setDisplayedText] = useState("");
  const [fadeText, setFadeText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  const fullText = "Virain Bawa";

  useEffect(() => {
    // Start progress bar immediately
    setProgress(90);

    // 1 second to reach 50%
    const midTimer = setTimeout(() => {
      // Pause 0.5 sec
      const pauseTimer = setTimeout(() => {
        // Fill to 100%
        setProgress(100);

        // After filling to 100%, wait 1 sec then start typing text
        const finishTimer = setTimeout(() => {
          setShowText(true);

          let index = 0;

          const typingInterval = setInterval(() => {
            if (index < fullText.length) {
              setDisplayedText(fullText.slice(0, index + 1));
              index++;
            } else {
              clearInterval(typingInterval);

              // After typing done, fade text out
              setTimeout(() => {
                setFadeText(true);

                setTimeout(() => {
                  setFadeOut(true);
                  if (onFinish) onFinish();
                }, 800);
              }, 1000);
            }
          }, 80);
        }, 1000); // wait after final progress fill

        // Cleanup finishTimer and typingInterval
        return () => {
          clearTimeout(finishTimer);
          clearInterval(typingInterval);
        };
      }, 500);

      return () => clearTimeout(pauseTimer);
    }, 500);

    return () => clearTimeout(midTimer);
  }, [onFinish, fullText]);

  return (
    <div
      className={`
        fixed inset-0 bg-white flex flex-col items-center justify-center z-50
        transition-opacity duration-1000
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Progress Bar */}
      {!showText && (
        <div className="w-64 h-1 bg-gray-300 rounded overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Text */}
      {showText && (
        <h1
          className={`
            text-4xl font-bold text-black mt-6
            transition-opacity duration-700
            ${fadeText ? "opacity-0" : "opacity-100"}
          `}
        >
          {displayedText}
        </h1>
      )}
    </div>
  );
}
