import React, { useState } from "react";
import MenuBar from "../components/Desktop/MenuBar";
import StartupAnimation from "../components/StartupAnimation";
import Dock from "../components/Desktop/Dock";
import BackgroundSketch from "../components/BackDrop";
import { dockApps } from "../content";
import Overlay from "../components/Overlay";

export default function DesktopLayout() {
  const [dockVisible, setDockVisible] = useState(false);
  const [openApps, setOpenApps] = useState([]);

  const handleOpen = (app) => {
    const alreadyOpen = openApps.find((a) => a.name === app.name);

    if (alreadyOpen) {
      // Bring to front
      setOpenApps([...openApps.filter((a) => a.name !== app.name), app]);
    } else {
      // Just add to the array
      setOpenApps([...openApps, app]);
    }
  };

  const handleClose = (name) => {
    setOpenApps(openApps.filter((a) => a.name !== name));
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
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
      <div
        className={`
    fixed top-0 left-0 w-full z-50
    transition-transform duration-700 ease-out
    ${dockVisible ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <MenuBar dockApps={dockApps} onOpen={handleOpen} />
        <Overlay />
      </div>

      {!dockVisible && (
        <StartupAnimation onFinish={() => setDockVisible(true)} />
      )}

      <Dock
        visible={dockVisible}
        onOpen={handleOpen}
        onClose={handleClose}
        openApps={openApps}
      />

      {/* Render open windows */}
      {openApps.map((app, index) => (
        <app.component
          key={app.name}
          onClose={() => handleClose(app.name)}
          onClick={() => handleOpen(app)}
          index={index}
          openWindow={(newComponent) =>
            handleOpen({
              name: `window-${Date.now()}`, // generate a unique name
              component: newComponent,
            })
          }
        />
      ))}
    </div>
  );
}
