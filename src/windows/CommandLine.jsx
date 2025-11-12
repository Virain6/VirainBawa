import React, { useEffect, useRef, useState } from "react";
import WindowContainer from "../components/WindowContainer";

export default function CommandLineWindow({ onClose, onClick, index }) {
  const [active, setActive] = useState("");
  const [history, setHistory] = useState([]);
  const prompt = "(base) user@VirainBawa$ ";
  const endRef = useRef(null);
  const commands = {
    find: {
      description: "Searches for files matching a pattern",
      usage: "find <pattern>",
      run: (args) => {
        if (!args[0]) return "Usage: find <pattern>";
        // Simulate a file search result
        return [
          `Searching for "${args[0]}"...`,
          "Found 3 matches:",
          "- /home/user/Documents/file1.txt",
          "- /home/user/Downloads/file2.txt",
          "- /home/user/Desktop/file3.txt",
        ].join("\n");
      },
    },
    help: {
      description: "Lists all available commands",
      usage: "help",
      run: () => {
        return Object.keys(commands)
          .map((cmd) => `${cmd} — ${commands[cmd].description}`)
          .join("\n");
      },
    },
    echo: {
      description: "Echoes back whatever you type",
      usage: "echo <text>",
      run: (args) => args.join(" "),
    },
    open: {
      description: "Opens file matching the text",
      usage: "echo <text>",
      run: (args) => {
        return `opening ${args}...`;
      },
    },
  };

  const handleActiveSubmit = () => {
    if (!active.trim()) return;

    const [cmd, ...args] = active.split(" ");

    if (commands[cmd]) {
      const output = commands[cmd].run(args);

      setHistory((prev) => [
        ...prev,
        { type: "input", text: `${prompt}${active}` },
        { type: "output", text: output },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "input", text: `${prompt}${active}` },
        { type: "error", text: `Command "${cmd}" not found` },
      ]);
    }

    setActive("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <WindowContainer
      title="Command Line"
      onClose={onClose}
      onClick={onClick}
      index={index}
      width={700}
      height={400}
    >
      <div
        className="
          flex flex-col h-full
          bg-[rgba(34,34,34,0.6)]
          text-white shadow-[0_0_30px_rgba(128,0,255,0.3)]
          ring-1 ring-inset ring-white/10
          rounded-b-xl font-mono p-3 overflow-auto
        "
      >
        <pre className="whitespace-pre-wrap leading-6">
          {history.map((entry, i) => (
            <div
              key={i}
              className={
                entry.type === "input"
                  ? "text-white"
                  : entry.type === "output"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {entry.text}
            </div>
          ))}
        </pre>
        <div ref={endRef} />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleActiveSubmit();
          }}
          className="flex items-center gap-2"
        >
          <span className="select-none">{prompt}</span>
          <input
            type="text"
            value={active}
            onChange={(e) => setActive(e.target.value)}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none caret-white"
          />
        </form>
      </div>
    </WindowContainer>
  );
}
