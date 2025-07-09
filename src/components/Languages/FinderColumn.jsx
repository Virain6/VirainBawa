import { Circle } from "lucide-react";
import { projectData } from "../../data/projects";

export default function FinderColumn({
  data,
  onClick,
  finalLevel = false,
  columnIndex,
  setContent,
  selectedKey,
}) {
  if (!data || typeof data !== "object") return null;
  const entries = Object.entries(data);

  return (
    <div
      className={`border-r border-neutral-700 bg-neutral-900/50 text-white p-2 flex-shrink-0 ${
        finalLevel ? "w-[min(300px,100%)] min-w-[200px]" : "w-[200px]"
      }`}
    >
      {finalLevel && Array.isArray(data)
        ? data.map((id) => {
            const project = projectData.find((p) => p.id === id);
            return (
              <div
                key={id}
                className="hover:bg-neutral-800 p-2 rounded text-sm cursor-pointer"
                onClick={() => {
                  if (project?.image || project?.about) {
                    setContent({
                      image: project.image,
                      about: project.about,
                    });
                  }
                }}
              >
                <p className="font-semibold">{project?.title}</p>
                <p className="text-xs text-gray-400">{project?.description}</p>
              </div>
            );
          })
        : entries.map(([key, value]) => {
            const isObject = typeof value === "object" && !Array.isArray(value);
            const Icon = isObject && value?.icon ? value.icon : Circle;
            const hasChildren = isObject && value.children;

            return (
              <div
                key={key}
                className={`cursor-pointer p-2 rounded text-sm flex items-center gap-2 ${
                  key === selectedKey
                    ? "bg-neutral-800"
                    : "hover:bg-neutral-800"
                }`}
                onClick={() =>
                  onClick(key, columnIndex, hasChildren ? value.children : null)
                }
              >
                <Icon className="w-4 h-4 text-white" />
                <span>{key}</span>
              </div>
            );
          })}
    </div>
  );
}
