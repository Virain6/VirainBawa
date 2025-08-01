import React, { useState } from "react";
import WindowContainer from "../components/WindowContainer";
import NotesSidebar from "../components/Blog/NotesSidebar";
import NotesHeader from "../components/Blog/NotesHeader";
import NotesContent from "../components/Blog/NotesContent";
import { notesData } from "../data/notes";

export default function BlogWindow({ onClose, onClick, index }) {
  const [selectedNoteId, setSelectedNoteId] = useState(notesData[0].id);
  const [fontSize, setFontSize] = useState(14);

  const selectedNote = notesData.find((note) => note.id === selectedNoteId);

  return (
    <WindowContainer
      title="Blog"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div className="flex flex-col sm:flex-row h-full w-full bg-neutral-900 text-white overflow-hidden">
        <NotesSidebar
          notes={notesData}
          onSelect={(id) => setSelectedNoteId(id)}
          selectedId={selectedNoteId}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <NotesHeader
            fontSize={fontSize}
            setFontSize={setFontSize}
            note={selectedNote}
          />
          <NotesContent note={selectedNote} fontSize={fontSize} />
        </div>
      </div>
    </WindowContainer>
  );
}
