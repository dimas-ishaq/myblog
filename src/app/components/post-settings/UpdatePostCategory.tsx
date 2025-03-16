"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import FormUpadtePostCategory from "./FormUpdatePostCategory";

export default function UpdatePostCategory({ categoryId }: { categoryId: string }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <FormUpadtePostCategory categoryId={categoryId} />
        </Modal>
      )}
      <button
        className="text-xs px-3 py-1  w-full text-left flex items-center hover:bg-gray-100 gap-x-2 "
        onClick={() => setOpen(!isOpen)}
      >
        <Pencil width={16} />
        Update{" "}
      </button>
    </>
  );
}
