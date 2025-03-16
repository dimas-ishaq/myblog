"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import FormAddCategory from "./FormAddPostCategory";
import { BadgePlus } from "lucide-react";
export default function CreatePostCategory() {
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
        <FormAddCategory />
      </Modal>
      <button
        role="button"
        className="text-green-700 text-sm flex items-center gap-x-2  px-3 py-2 self-start bg-white rounded  border-green-500 border shadow-green-500 shadow  hover:shadow-green-600 hover:shadow-md "
        onClick={(e) => handleOpenModal(e)}
      >
        <BadgePlus width={20}/>
        Create Category
      </button>
    </>
  );
}
