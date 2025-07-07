import React from "react";
import ReactMarkdown from "react-markdown";

export default function NotesContent({ note, fontSize }) {
  if (!note) return <div className="p-4">No note selected.</div>;

  return (
    <>
      <p className="text-xs w-full text-center mt-2 text-neutral-500">
        {note.date}
      </p>
      <div
        className="p-6 overflow-y-auto"
        style={{ fontSize: `${fontSize}px` }}
      >
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </>
  );
}
