import React, { useState } from "react";
import StartupAnimation from "../components/StartupAnimation";
import BackgroundSketch from "../components/BackDrop";
import DockMobile from "../components/Mobile/DockMobile";
import { mobileDockApps } from "../content";
import MobileHomeGrid from "../components/Mobile/MobileHomeGrid";

export default function MobileLayout() {
  const [animationDone, setAnimationDone] = useState(false);
  const [dockVisible, setDockVisible] = useState(false);
  const [openApp, setOpenApp] = useState(null);

  const handleOpen = (app) => {
    if (app.name === "Home") {
      // Close all apps when Home clicked
      setOpenApp(null);
    } else {
      // Only one app open
      setOpenApp(app);
    }
  };

  const handleClose = () => {
    setOpenApp(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Background */}
      <div
        className="
          fixed inset-0 z-0
          bg-cover bg-center
        "
        style={{
          backgroundImage: "url('/images/background.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <BackgroundSketch />

      {/* Startup Animation */}
      {!dockVisible && (
        <StartupAnimation
          onFinish={() => {
            setAnimationDone(true);
            setTimeout(() => setDockVisible(true), 300);
          }}
        />
      )}
      {animationDone && (
        <>
          {openApp ? (
            <div className="absolute inset-0 z-10 overflow-y-auto bg-white text-black">
              <openApp.component
                onClose={handleClose}
                onClick={() => handleOpen(openApp)}
              />
            </div>
          ) : (
            <MobileHomeGrid onOpen={handleOpen} />
          )}

          {/* Dock */}
          <DockMobile
            visible={dockVisible}
            onOpen={handleOpen}
            onClose={handleClose}
            openApps={openApp ? [openApp] : []}
          />

          {/* Open Window */}
          {openApp && openApp.component && (
            <openApp.component
              key={openApp.name}
              onClose={handleClose}
              onClick={() => handleOpen(openApp)}
              index={0}
            />
          )}
        </>
      )}
    </div>
  );
}
