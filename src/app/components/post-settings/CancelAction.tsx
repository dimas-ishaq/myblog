import { CircleX } from "lucide-react";

export default function CancelAction({
    setOpen,
  }: {
    setOpen: (categoryId: string | null) => void;
  }) {
    return (
      <button
        className="text-xs px-3 py-1 w-full text-left flex items-center rounded bg-red-500 text-white hover:bg-red-600  gap-x-2"
        onClick={() => setOpen(null)}
      >
        <CircleX width={16} />
        Cancel{" "}
      </button>
    );
  }