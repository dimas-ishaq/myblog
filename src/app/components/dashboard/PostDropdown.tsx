"use client";
import {
  ChartColumnStacked,
  ChevronDown,
  ChevronUp,
  StickyNote,
  Tags,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function PostDropdown() {
  const [isDropdown, setDropdown] = useState(false);
  return (
    <>
      <div
        className={` ${
          isDropdown ? "bg-green-300 text-gray-800" : "text-white"
        } font-normal text-sm items-center  rounded hover:bg-green-300 w-full hover:text-gray-800 `}
      >
        <button
          onClick={() => setDropdown(!isDropdown)}
          className="py-1.5 px-3 flex items-center gap-3 font-medium rounded"
        >
          <StickyNote />
          Post Settings
          {isDropdown ? <ChevronUp width={18} /> : <ChevronDown width={18} />}
        </button>
      </div>
      {isDropdown && (
        <div className="flex flex-col ml-6 text-xs mt-2 space-y-2 text-slate-50 w-fit">
          <Link href={"/dashboard/post-settings/categories"} className="hover:border-b pb-1">
            <span className="flex items-center gap-x-2">
              <ChartColumnStacked />
              Categories
            </span>
          </Link>
          <Link href={"/dashboard/post-settings/tags"} className="hover:border-b pb-1">
            <span className="flex items-center gap-x-2">
              <Tags />
              Tags
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
