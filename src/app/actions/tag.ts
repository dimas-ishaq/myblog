"use server";

import { FormState } from "../lib/definitions";
import * as Yup from "yup";
import { tagSchema } from "../lib/definitions";
import { prisma } from "../lib/prisma";

export async function createPostTag(state: FormState, formData: FormData) {
  const data = {
    name: formData.get("tag")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
  console.log(data);
  try {
    await tagSchema.validate(data, {
      abortEarly: false,
    });
    if (!prisma) {
      throw new Error("Prisma client not initialized");
    }
    const isTagExist = await prisma.tag.findUnique({
      where: {
        name: data.name,
      },
    });

    if (isTagExist) {
      const errors: Record<string, string> = {
        name: "Tag already exists",
      };
      return {
        errors,
      };
    }
     await prisma.tag.create({
      data,
    });
    return {
      success: "Tag created successfully"
    };
  } catch (err) {
    console.log(err);
    if (err instanceof Yup.ValidationError) {
      const errors: Record<string, string> = {};
      err.inner.forEach((error) => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });
      return {
        errors,
      };
    }
  }
}

export async function findManyTag() {
  const tags = await prisma.tag.findMany();
  return tags;
}

export async function updatePostTag(state: FormState, formData: FormData) {
  const data = {
    tagId: formData.get("tagId")?.toString() ?? "",
    name: formData.get("tag")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
  try {
    await tagSchema.validate(data, {
      abortEarly: false,
    });
    if (!prisma) {
      throw new Error("Prisma client not initialized");
    }
    const isTagExist = await prisma.tag.findUnique({
      where: {
        name: data.name,
      },
    });

    if (isTagExist) {
      const errors: Record<string, string> = {
        name: "Tag already exists",
      };
      return {
        errors,
      };
    }
  await prisma.tag.update({
      where: {
        id: data.tagId,
      },
      data,
    });
    return {
      success: "Tag updated successfully",
    };
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errors: Record<string, string> = {};
      err.inner.forEach((error) => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });
      return {
        errors,
      };
    }
  }
}


export async function deletePostTag(state: { errors?: { message: string }; success?: string } | undefined, formData: FormData){
  const tagId = formData.get("tagId")?.toString() ?? "";
  try {
    const isTagExist = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!isTagExist) {
      return {
        errors: { message: "Tag not found" },
      };
    }

    await prisma.tag.delete({ where: { id: tagId } });

    return {
      success: "Tag deleted successfully",
    };
  } catch (error) {
    if (error instanceof Error)
    return {
      errors: { message: error.message },
    };
  }
};

