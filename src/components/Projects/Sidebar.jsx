import React from "react";
import { playlistData } from "../../data/projects";

export default function Sidebar({ onSelectPlaylist }) {
  return (
    <aside className="w-58 p-4 bg-neutral-900 rounded-md border-neutral-800 overflow-y-auto">
      <h2 className="text-md font-semibold mb-4 text-neutral-100">
        Collections
      </h2>
      <div className="space-y-3">
        {playlistData.map((playlist) => (
          <div
            key={playlist.id}
            className="
             hover:bg-neutral-700
             rounded cursor-pointer transition flex gap-x-2 pt-2 px-2 
            "
            onClick={() => onSelectPlaylist(playlist)}
          >
            <div className="rounded bg-neutral-200 p-2 mb-2 w-10 h-10 inline-flex items-center justify-center">
              <playlist.icon className="w-5 h-5 mb-1 text-neutral-900" />
            </div>
            <div className="w-0 flex-1">
              <h3 className="text-sm font-semibold truncate">
                {playlist.title}
              </h3>
              <p className="text-xs text-neutral-400 truncate">
                {playlist.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
