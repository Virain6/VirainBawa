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
      className={`border-r border-neutral-700 bg-neutral-900 text-white p-2 flex-shrink-0 ${
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
        : entries.map(([key, value]) => (
            <div
              key={key}
              className={`cursor-pointer p-2 rounded text-sm ${
                key === selectedKey ? "bg-neutral-800" : "hover:bg-neutral-800"
              }`}
              onClick={() => onClick(key, columnIndex)}
            >
              {key}
            </div>
          ))}
    </div>
  );
}
