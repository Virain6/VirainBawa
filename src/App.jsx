import React, { useEffect } from "react";
import DesktopLayout from "./layouts/Desktop";
import MobileLayout from "./layouts/Mobile";
import { useIsMobile } from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();

  // Set --vh for iOS
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="w-full" style={{ height: "calc(var(--vh) * 100)" }}>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
