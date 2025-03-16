"use client";
import { deletePostCategory } from "@/app/actions/category";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function FormDeletePostCategory({
  categoryId,
}: {
  categoryId: string;
}) {
  const [state, action, pending] = useActionState(
    deletePostCategory,
    undefined
  );
  const [isSuccess, setSuccess] = useState<boolean | null>(null);
  const router = useRouter()
  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
      router.refresh();
    }
  }, [state?.success]);
  return (
    <>
      {isSuccess && <p>Deleted Category Successfully</p>}
      {isSuccess === null  && <form action={action} className="flex flex-col space-y-4 text-center">
        <label htmlFor="categoryId" className="text-wrap">
          Are you sure you want to delete this category?
        </label>
        <input
          type="text"
          name="categoryId"
          id="categoryId"
          defaultValue={categoryId}
          hidden
        />
        <button disabled={pending} className="bg-red-500 hover:bg-red-600 w-fit self-center px-2.5 py-1.5 rounded text-sm text-white">
          Delete Category
        </button>
      </form>}
      
    </>
  );
}
