"use client"
import ActionsTag from "./ActionsTag";
import { useState } from "react";
type TagsProps = {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function TagsTable({ tags }: { tags: TagsProps[] }) {
    const [isOpen, setOpen] = useState<string |null>(null)
  return (
    <div className="overflow-x-auto min-h-[400px]">
      <table className="table-auto w-full border-collapse border border-gray-800 shadow-lg rounded-lg">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-2 text-left border border-gray-800">Name</th>
            <th className="p-2 text-left border border-gray-800">
              Description
            </th>
            <th className="p-2 text-left border border-gray-800">Created At</th>
            <th className="p-2 text-left border border-gray-800">Updated At</th>
            <th className="p-2 text-left border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr
              key={tag.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-2 border border-gray-800">{tag.name}</td>
              <td className="p-2 border border-gray-800">{tag.description}</td>
              <td className="p-2 border border-gray-800 whitespace-nowrap">
                {new Date(tag.createdAt).toISOString()}
              </td>
              <td className="p-2 border border-gray-800 whitespace-nowrap">
                {new Date(tag.updatedAt).toISOString()}
              </td>
              <td className="p-2 border border-gray-800 whitespace-nowrap">
                <ActionsTag
                  tagId={tag.id ?? ""}
                  isOpen={isOpen}
                  setOpen={setOpen}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
