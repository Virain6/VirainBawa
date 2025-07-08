import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // you can change theme
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkToc from "remark-toc";

export default function NotesContent({ note, fontSize }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!note) return;

    if (note.content) {
      setContent(note.content);
      setLoading(false);
    } else if (note.file) {
      setLoading(true);
      fetch(note.file)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch(() => setContent("Error loading note."))
        .finally(() => setLoading(false));
    }
  }, [note]);

  useEffect(() => {
    if (!loading && content) {
      const hash = decodeURIComponent(window.location.hash); // ✅ decode it
      if (hash) {
        // Replace special characters for valid selector
        try {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } catch (err) {
          console.error("Invalid hash selector:", hash);
        }
      }
    }
  }, [loading, content]);

  if (!note) return <div className="p-4">No note selected.</div>;

  return (
    <>
      <p className="text-xs w-full text-center mt-2 text-neutral-500">
        {note.date}
      </p>
      <div
        className="markdown-body overflow-y-auto"
        style={{
          fontSize: `${fontSize}px`,
          maxWidth: "100%",
          width: "100%",
          wordBreak: "break-word",
          padding: "1rem",
          backgroundColor: "#1a1a1a", // matches Tailwind's bg-neutral-900
          backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)
    `,
          backgroundSize: "20px 20px, 40px 40px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      >
        {loading ? (
          <p className="text-sm text-center text-gray-500">Loading...</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks, remarkToc]} // 👈 Add remarkBreaks here
            rehypePlugins={[rehypeSlug]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      borderRadius: "0.5rem",
                      padding: "1rem",
                      fontSize: `${fontSize}px`,
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-neutral-800 text-purple-300 px-1 py-0.5 rounded"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
}
