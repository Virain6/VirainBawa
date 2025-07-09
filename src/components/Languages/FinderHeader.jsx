import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FinderHeader({
  path,
  onBack,
  onNavigateToLevel,
  selectedSection,
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-white text-sm">
      {/* Back button */}
      {path.length > 0 && (
        <button onClick={onBack}>
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <span className="font-medium">{selectedSection}</span>

      {/* Path breadcrumbs */}
      {path.map((segment, index) => (
        <div key={index} className="flex items-center gap-1">
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          <button
            className="hover:underline hover:text-white text-neutral-300"
            onClick={() => onNavigateToLevel(index)}
          >
            {segment}
          </button>
        </div>
      ))}
    </div>
  );
}
