"use client";
import { useState } from "react";
import Modal from "../Modal";
import FormAddPostTag from "./FormAddPostTag";

export default function CreatePostTag() {
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
        <FormAddPostTag />
      </Modal>
      <button
        role="button"
        className="text-green-600 text-xs underline self-end hover:text-green-700"
        onClick={(e) => handleOpenModal(e)}
      >
        create tag
      </button>
    </>
  );
}
