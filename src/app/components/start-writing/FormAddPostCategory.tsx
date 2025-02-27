'use client'

import { createPostCategory } from "@/app/actions/category";
import { useActionState } from "react";

export default function FormAddPostCategory() {
  const[state, actions, pending] = useActionState(createPostCategory, undefined)

  return (
    <div className="flex flex-col w-full">
      <form action={actions} className="space-y-2">
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
        <button
          type="submit"
          disabled={pending}
          className="font-semibold bg-green-500 px-2.5 py-2.5 rounded-md text-white hover:bg-green-600 w-6/12 mt-2"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
