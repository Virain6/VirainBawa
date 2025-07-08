import React from "react";
import { Download, Plus, Minus } from "lucide-react";

export default function NotesHeader({ fontSize, setFontSize, note }) {
  const handleDownload = () => {
    if (!note) return;

    const blob = new Blob([note.content || "No content"], {
      type: "text/markdown;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${note.title || "note"}.md`;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up
  };

  return (
    <div className="flex items-center justify-between bg-neutral-800 p-2 border-b border-neutral-700">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setFontSize((f) => Math.max(f - 2, 10))}
          className="p-1 rounded bg-neutral-700 hover:bg-neutral-600"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-sm">{fontSize}px</span>
        <button
          onClick={() => setFontSize((f) => f + 2)}
          className="p-1 rounded bg-neutral-700 hover:bg-neutral-600"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button
        onClick={handleDownload}
        className="p-1 rounded bg-neutral-700 hover:bg-neutral-600"
      >
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
}
