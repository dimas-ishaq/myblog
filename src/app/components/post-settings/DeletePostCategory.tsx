"use client";

import { Trash2 } from "lucide-react";
import Modal from "../Modal";
import { useState } from "react";
import FormDeletePostCategory from "./FormDeletePostCategory";
export default function DeletePostCategory({
   categoryId 
}:{
    categoryId: string
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <FormDeletePostCategory categoryId={categoryId} />
        </Modal>
      )}
      <button className="text-xs px-3 py-1 w-full text-left flex items-center hover:bg-gray-100 hover:text-red-500  gap-x-2" onClick={() => setOpen(true)}>
        <Trash2 width={16} />
        Delete{" "}
      </button>
    </>
  );
}
