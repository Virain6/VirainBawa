import { useState } from "react";
import { X, CircleQuestionMark } from "lucide-react";

export default function Overlay() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="
        fixed top-10 right-4
        bg-green-600/80 backdrop-blur-md
        text-white rounded-lg shadow-lg
         max-w-xs w-full
        z-50
      "
    >
      <div className="flex justify-between items-start">
        <div className="flex space-x-2 p-4">
          <CircleQuestionMark strockwidth={1} />
          <p className="text-sm font-semibold">Try out the apps below.</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-white/80 hover:text-white"
          aria-label="Close overlay"
        >
          <X className="w-4 h-4 mt-2 mr-2" />
        </button>
      </div>
    </div>
  );
}
