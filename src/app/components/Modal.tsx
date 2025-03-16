
export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center`}
    >
      <div className="bg-white mx-auto w-4/12 my-auto items-center rounded p-8 relative">
        {children}
        <button
          className="absolute top-3 right-5 text-red-500 flex items-center justify-center font-semibold text-xl"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
