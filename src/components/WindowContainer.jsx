// src/components/WindowContainer.jsx
import React from "react";
import { Rnd } from "react-rnd";
import WindowHeader from "./Desktop/WindowHeader";
import { useIsMobile } from "../hooks/useIsMobile";

export default function WindowContainer({
  title,
  onClose,
  onClick,
  index,
  children,
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    // FULLSCREEN on mobile, NO HEADER
    return (
      <div
        className="
          fixed inset-0 z-50 bg-white dark:bg-neutral-900
          flex flex-col overflow-auto pb-30
        "
      >
        {children}
      </div>
    );
  }

  // DESKTOP: Rnd draggable window with header
  const defaultWidth = Math.min(window.innerWidth - 40, 1200);
  const defaultHeight = Math.min(window.innerHeight - 100, 650);

  return (
    <Rnd
      default={{
        x: Math.max((window.innerWidth - defaultWidth) / 2, 0),
        y: Math.max((window.innerHeight - defaultHeight) / 2, 0),
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={400}
      minHeight={500}
      bounds="window"
      dragHandleClassName="window-drag-handle"
      className="z-50"
      onDragStart={onClick}
    >
      <div
        className="flex flex-col h-full rounded-lg shadow-2xl overflow-hidden"
        onMouseDown={onClick}
      >
        <WindowHeader title={title} onClose={onClose} />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </Rnd>
  );
}
