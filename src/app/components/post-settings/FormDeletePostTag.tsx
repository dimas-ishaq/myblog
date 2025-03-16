"use client";
import { deletePostTag } from "@/app/actions/tag";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function FormDeletePostTag({
  tagId,
}: {
  tagId: string;
}) {
  const [state, action, pending] = useActionState(
    deletePostTag,
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
      {isSuccess && <p>Deleted Tag Successfully</p>}
      {isSuccess === null  && <form action={action} className="flex flex-col space-y-4 text-center">
        <label htmlFor="tagId">
          Are you sure you want to delete this Tag?
        </label>
        <input
          type="text"
          name="tagId"
          id="tagId"
          defaultValue={tagId}
          hidden
        />
        <button disabled={pending} className="bg-red-500 hover:bg-red-600 w-fit self-center px-2.5 py-1.5 rounded text-sm text-white">
          Delete Tag
        </button>
      </form>}
      
    </>
  );
}
