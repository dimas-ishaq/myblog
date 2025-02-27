"use client";
import { useState } from "react";
export default function PostContent() {
    const [value, setValue] = useState("")
  return (
    <textarea name="content" id="content" onFocus={(e) =>setValue(localStorage.getItem("content") ??"") } defaultValue={value}>
    </textarea>
  );
}
