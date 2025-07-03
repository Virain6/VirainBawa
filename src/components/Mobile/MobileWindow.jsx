// src/components/Mobile/MobileWindow.jsx
import React from "react";
import { X } from "lucide-react";

export default function MobileWindow({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[9000] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-50">
        <h2 className="text-base font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="p-1 text-neutral-500 hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
