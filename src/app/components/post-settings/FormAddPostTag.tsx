"use client";

import { useActionState, useEffect, useState } from "react";
import { createPostTag } from "@/app/actions/tag";
import { useRouter } from "next/navigation";
export default function FormAddPostTag() {
  const [state, actions, pending] = useActionState(createPostTag, undefined);
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
      {isSuccess && <p className="text-greeb-600"> Tag Created Successfully</p>}
      <form action={actions} className="space-y-2">
        <h3 className="text-center">Post Tag</h3>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            name="tag"
            id="tag"
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
        <button
          type="submit"
          disabled={pending}
          className="font-semibold bg-green-500 px-2.5 py-2.5 rounded-md text-white hover:bg-green-600 w-6/12 mt-2"
        >
          Add Tag
        </button>
      </form>
    </div>
  );
}
