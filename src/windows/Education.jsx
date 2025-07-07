import React, { useState } from "react";
import WindowContainer from "../components/WindowContainer";
import { educationData } from "../data/education";
import MapView from "../components/Education/MapView";
import InfoPanel from "../components/Education/InfoPanel";

export default function EducationWindow({ onClose, onClick, index }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === educationData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? educationData.length - 1 : prev - 1
    );
  };

  const handleMarkerClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <WindowContainer
      title="Education"
      onClose={onClose}
      onClick={onClick}
      index={index}
      width={1200}
      height={600}
    >
      <div className="relative w-full h-full">
        <MapView
          steps={educationData}
          activeIndex={activeIndex}
          onMarkerClick={handleMarkerClick}
        />
        <InfoPanel
          step={educationData[activeIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </WindowContainer>
  );
}
