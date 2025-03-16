"use client";

import { useState } from "react";
import Modal from "../Modal";
import { Pencil } from "lucide-react";
import FormUpdatePostTag from "./FormUpdatePostTag";

export default function UpdatePostTag({ tagId }: { tagId: string }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <FormUpdatePostTag tagId={tagId} />
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
