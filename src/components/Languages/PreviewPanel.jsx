// components/Finder/PreviewPanel.jsx

import React from "react";
import ReactMarkdown from "react-markdown";
export default function PreviewPanel({ content }) {
  if (typeof content === "object") {
    return (
      <div className="flex-1 max-w-[400px] min-w-[200px] p-4 bg-neutral-950 text-white overflow-auto space-y-4">
        {content.image && (
          <img
            src={content.image}
            alt="Preview"
            className="w-full h-auto rounded"
          />
        )}
        {content.about && (
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p className="prose prose-invert max-w-none" {...props} />
              ),
            }}
          >
            {content.about}
          </ReactMarkdown>
        )}
      </div>
    );
  }

  // Fallback: just string
  return (
    <div className="flex-1 max-w-[400px] p-4 bg-neutral-950 text-white overflow-auto">
      <ReactMarkdown className="prose prose-invert max-w-none">
        {content}
      </ReactMarkdown>
    </div>
  );
}
