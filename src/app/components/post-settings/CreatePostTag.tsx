"use client";
import { useState } from "react";
import Modal from "../Modal";
import FormAddPostTag from "./FormAddPostTag";
import { BadgePlus } from "lucide-react";

export default function CreatePostTag() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <FormAddPostTag />
      </Modal>
      <button
        role="button"
        className="text-green-700 text-sm flex items-center gap-x-2  px-3 py-2 self-start bg-white rounded  border-green-500 border shadow-green-500 shadow  hover:shadow-green-600 hover:shadow-md "
        onClick={(e) => handleOpenModal(e)}
      >
        <BadgePlus width={20}/>
        Create Tag
      </button>
    </>
  );
}
