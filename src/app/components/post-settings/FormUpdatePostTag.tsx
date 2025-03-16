"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useActionState } from "react";
import { updatePostTag } from "@/app/actions/tag";

export default function FormUpdatePostTag({
  tagId,
}: {
  tagId: string;
}) {
  const [state, actions, pending] = useActionState(
    updatePostTag,
    undefined
  );
  const [isSuccess, setSuccess] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
      router.refresh();
    }
    setTimeout(() => setSuccess(false), 3000);
  }, [state?.success]);
  return (
    <div className="flex flex-col w-full">
      {isSuccess && (
        <p className="text-green-500 text-center">
          Category updated successfully
        </p>
      )}
      <form action={actions} className="space-y-2 text-sm">
        <h3 className="text-center">Post Category</h3>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            className="px-2.5 py-2 border-2 rounded-md focus:outline-green-500 focus:outline-1"
          />
        </div>
        {state?.errors?.name && (
          <p className="text-red-500">{state.errors.name}</p>
        )}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="px-2.5 py-2 border-2 rounded-md focus:outline-green-500 focus:outline-1"
          />
        </div>
        {state?.errors?.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
        <input type="text" name="tagId" id="tagId" defaultValue={tagId} hidden />
        <button
          type="submit"
          disabled={pending}
          className="font-semibold bg-green-500 px-2.5 py-2.5 rounded-md text-white hover:bg-green-600 w-6/12 mt-2"
        >
          Edit Category
        </button>
      </form>
    </div>
  );
}
