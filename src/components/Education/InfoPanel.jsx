import React from "react";
import {
  GraduationCap,
  Home,
  Map,
  Briefcase,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  GraduationCap: GraduationCap,
  Home: Home,
  Map: Map,
  Briefcase: Briefcase,
};

export default function InfoPanel({ step, onNext, onPrev }) {
  const IconComponent = iconMap[step.icon] || GraduationCap;

  return (
    <div
      className="
        absolute top-4 right-4 z-[1000]
        bg-[#2c2c2e]/60 backdrop-blur-sm shadow-xl rounded-xl
        p-4 w-80 flex flex-col space-y-4 text-white
      "
    >
      {/* Top Row: Icon + Title */}
      <div className="flex items-center space-x-3">
        {/* Big Lucide Icon */}
        <div
          className="
            flex-shrink-0 w-12 h-12 rounded-lg bg-[#3a3a3c]
            flex items-center justify-center
          "
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        {/* Title */}
        <h2 className="text-xl font-semibold leading-tight">{step.title}</h2>
      </div>

      {/* Description */}
      <p className="text-base text-gray-200">{step.description}</p>

      {/* Navigation Arrows */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="
            p-2 rounded-full hover:bg-[#3a3a3c] bg-[#505055]
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-center justify-center
          "
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="
            p-2 rounded-full hover:bg-[#3a3a3c] bg-[#505055]
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-center justify-center
          "
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
