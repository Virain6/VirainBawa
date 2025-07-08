import React, { useState } from "react";
import FinderColumn from "./FinderColumn";
import FinderHeader from "./FinderHeader";
import { languageSections } from "../../data/languages";
import { projectData } from "../../data/projects";
import PreviewPanel from "./PreviewPanel";

export default function FinderView() {
  const [path, setPath] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);

  const navigateTo = (key, columnIndex = path.length, content = null) => {
    const newPath = [...path.slice(0, columnIndex), key];
    setPath(newPath);

    if (content) {
      setSelectedContent(content);
    } else {
      setSelectedContent(null);
    }
  };

  const navigateBack = () => setPath(path.slice(0, -1));

  const navigateToLevel = (levelIndex) => {
    const newPath = path.slice(0, levelIndex + 1);
    setPath(newPath);
    setSelectedContent(null);
  };

  const getLevelAt = (levelPath) => {
    let level = languageSections;
    for (const key of levelPath) {
      if (typeof level[key] === "undefined") return null;
      level = level[key];
    }
    return level;
  };

  const currentLevel = getLevelAt(path);

  return (
    <div className="flex flex-col h-full">
      <FinderHeader
        path={path}
        onBack={navigateBack}
        onNavigateToLevel={navigateToLevel}
      />
      <div className="flex-1 w-full overflow-x-auto">
        <div className="flex min-w-[800px] w-fit h-full">
          <FinderColumn
            data={languageSections}
            onClick={navigateTo}
            columnIndex={0}
            selectedKey={path[0]}
          />

          {path.map((_, i) => {
            const levelPath = path.slice(0, i + 1);
            const level = getLevelAt(levelPath);
            if (!level) return null;

            const isFinalLevelArray =
              i === path.length - 1 && Array.isArray(level);

            return (
              <FinderColumn
                key={i}
                data={level}
                onClick={navigateTo}
                columnIndex={i + 1}
                finalLevel={isFinalLevelArray}
                setContent={setSelectedContent}
                selectedKey={path[i + 1]}
              />
            );
          })}

          {selectedContent && <PreviewPanel content={selectedContent} />}
        </div>
      </div>
    </div>
  );
}
