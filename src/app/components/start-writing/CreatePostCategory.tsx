"use client";
import { useState } from "react";
import Modal from "../Modal";
import FormAddCategory from "./FormAddPostCategory";
export default function CreatePostCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e: any) => {
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
        className="text-green-600 text-xs underline self-end hover:text-green-700"
        onClick={(e) => handleOpenModal(e)}
      >
        create category
      </button>
    </>
  );
}
