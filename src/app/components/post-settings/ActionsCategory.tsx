"use client";
import { Ellipsis } from "lucide-react";
import UpdatePostCategory from "./UpdatePostCategory";
import DeletePostCategory from "./DeletePostCategory";
import CancelAction from "./CancelAction";


export default function ActionsCategory({
  categoryId,
  isOpen,
  setOpen,
}: {
  categoryId: string;
  isOpen: string | null;
  setOpen: (categoryId: string | null) => void;
}) {
  const OpenAction = isOpen === categoryId;
  return (
    <>
      {OpenAction && (
        <div className="relative">
          <div className="absolute -top-2 -left-20 flex flex-col bg-white w-[120px] p-1.5 shadow-lg rounded space-y-1 ">
            <UpdatePostCategory categoryId={categoryId} />
            <DeletePostCategory categoryId={categoryId} />
            <CancelAction setOpen={setOpen} />
          </div>
        </div>
      )}
      <button
        className="flex flex-col w-full"
        onClick={() => setOpen(OpenAction ? null : categoryId)}
      >
        <Ellipsis className="hover:text-orange-500 cursor-pointer" />
      </button>
    </>
  );
}
