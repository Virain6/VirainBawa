import React, { useState } from "react";
import { Star } from "lucide-react";

export default function NotesSidebar({ notes, onSelect, selectedId }) {
  const [search, setSearch] = useState("");

  const filteredNotes = notes
    .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1;
      return new Date(b.date) - new Date(a.date);
    });

  return (
    <aside className="w-full sm:w-72 bg-neutral-900 text-white p-4 border-r border-neutral-700 overflow-y-auto">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-neutral-800"
      />
      <div className="space-y-2 overflow-y-auto">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => onSelect(note.id)}
            className={`cursor-pointer p-2 rounded hover:bg-neutral-700 ${
              selectedId === note.id ? "bg-neutral-700" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">{note.title}</h3>
              {note.favorite && <Star className="w-4 h-4 text-yellow-400" />}
            </div>
            <p className="text-xs text-neutral-400">{note.date}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
