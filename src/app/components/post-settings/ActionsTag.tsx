import { Ellipsis } from "lucide-react";

import CancelAction from "./CancelAction";
import UpdatePostTag from "./UpdatePostTag";
import DeletePostTag from "./DeletePostTag";

export default function ActionsTag({
  tagId,
  isOpen,
  setOpen,
}: {
  tagId: string;
  isOpen: string | null;
  setOpen: (tagId: string | null) => void;
}) {
  const OpenAction = isOpen === tagId;
  return (
    <>
      {OpenAction && (
        <div className="relative">
          <div className="absolute -top-2 -left-20 flex flex-col bg-white w-[120px] p-1.5 shadow-lg rounded space-y-1 ">
            <UpdatePostTag tagId={tagId} />
            <DeletePostTag tagId={tagId} />
            <CancelAction setOpen={setOpen} />
          </div>
        </div>
      )}
      <button
        className="flex flex-col w-full"
        onClick={() => setOpen(OpenAction ? null : tagId)}
      >
        <Ellipsis className="hover:text-orange-500 cursor-pointer" />
      </button>
    </>
  );
}
