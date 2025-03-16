"use client";
import { useState } from "react";
import ActionsCategory from "./ActionsCategory";

type Categories = {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
export default function CategoriesTable({
  categories,
}: {
  categories: Categories[];
}) {
  const [isOpen, setOpen] = useState<string | null>(null);
  return (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-800 shadow-lg rounded-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-2 text-left border border-gray-800">Name</th>
                <th className="p-2 text-left border border-gray-800">
                  Description
                </th>
                <th className="p-2 text-left border border-gray-800">
                  Created At
                </th>
                <th className="p-2 text-left border border-gray-800">
                  Updated At
                </th>
                <th className="p-2 text-left border border-gray-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={category.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="p-2 border border-gray-800">
                    {category.name}
                  </td>
                  <td className="p-2 border border-gray-800">
                    {category.description}
                  </td>
                  <td className="p-2 border border-gray-800 whitespace-nowrap">
                    {new Date(category.createdAt).toISOString()}
                  </td>
                  <td className="p-2 border border-gray-800 whitespace-nowrap">
                    {new Date(category.updatedAt).toISOString()}
                  </td>
                  <td className="p-2 border border-gray-800 whitespace-nowrap">
                    <ActionsCategory categoryId={category.id ?? ""} isOpen={isOpen} setOpen={setOpen} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
}
