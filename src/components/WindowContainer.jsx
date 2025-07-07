// src/components/WindowContainer.jsx
import React from "react";
import { Rnd } from "react-rnd";
import WindowHeader from "./Desktop/WindowHeader";
import { useIsMobile } from "../hooks/useIsMobile";
import { useRef } from "react";

export default function WindowContainer({
  title,
  onClose,
  onClick,
  index,
  children,
  width,
  height,
}) {
  const isMobile = useIsMobile();
  const rndRef = useRef();

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
  const fallbackWidth = Math.min(window.innerWidth - 40, 1200);
  const fallbackHeight = Math.min(window.innerHeight - 100, 650);

  const finalWidth = width || fallbackWidth;
  const finalHeight = height || fallbackHeight;

  const handleMaximize = () => {
    if (rndRef.current) {
      rndRef.current.updatePosition({ x: 0, y: 0 });
      rndRef.current.updateSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: Math.max((window.innerWidth - finalWidth) / 2, 0),
        y: Math.max((window.innerHeight - finalHeight) / 2, 0),
        width: finalWidth,
        height: finalHeight,
      }}
      minWidth={width || 400}
      minHeight={height || 500}
      bounds="window"
      dragHandleClassName="window-drag-handle"
      className="z-50"
      onDragStart={onClick}
    >
      <div
        className="flex flex-col h-full rounded-lg shadow-2xl overflow-hidden"
        onMouseDown={onClick}
      >
        <WindowHeader
          title={title}
          onClose={onClose}
          onMaximize={handleMaximize}
        />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </Rnd>
  );
}
