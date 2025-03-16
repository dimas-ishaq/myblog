"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

export const Tiptap = () => {
  const [value, setValue] = useState("");
   const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
     setValue(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl m-5 focus:outline-none overflow-y-auto",
      },
    },
    content: `
      Please type here ...
    `,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col relative z-0">
      <div className="flex flex-wrap p-2 text-dark gap-x-1 text-base sticky top-5 z-[1] bg-green-300 rounded mb-2">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`p-1 rounded ${
            editor.isActive("heading", { level: 1 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-1 rounded ${
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-1 rounded ${
            editor.isActive("heading", { level: 3 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`
          p-1 rounded ${
            editor.isActive("heading", { level: 4 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`p-1 rounded ${
            editor.isActive("heading", { level: 5 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }
          `}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`p-1 rounded ${
            editor.isActive("heading", { level: 6 })
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1 rounded ${
            editor.isActive("bold")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1 rounded ${
            editor.isActive("bulletList")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Ul
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1 rounded ${
            editor.isActive("orderedList")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Ol
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1 rounded ${
            editor.isActive("blockquote")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-1 rounded ${
            editor.isActive("code")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-1 rounded ${
            editor.isActive("codeBlock")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          Codeblock
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 rounded ${
            editor.isActive("italic")
              ? "bg-gray-800 text-white font-semibold"
              : ""
          }`}
        >
          <em>Italic</em>
        </button>
      </div>
      <input type="text" name="content" hidden id="content" defaultValue={value}/>
      <EditorContent editor={editor}  />
    </div>
  );
};

