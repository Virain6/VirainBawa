import React from "react";
import WindowContainer from "../components/WindowContainer";
import { Download } from "lucide-react";

export default function PdfPreviewWindow({
  onClose,
  onClick,
  index,
  file,
  fileName,
}) {
  return (
    <WindowContainer
      title={fileName}
      onClose={onClose}
      onClick={onClick}
      index={index}
      width={1000}
      height={700}
    >
      <div className="flex flex-col h-full bg-neutral-900/60 backdrop-blur-md text-white">
        {/* PDF Preview */}
        <div className="flex-1 overflow-hidden">
          <iframe src={file} title={fileName} className="w-full h-full" />
        </div>
      </div>
    </WindowContainer>
  );
}
