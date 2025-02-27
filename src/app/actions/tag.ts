"use server";

import { FormState } from "../lib/definitions";
import * as Yup from "yup";
import { tagSchema } from "../lib/definitions";
import { prisma } from "../lib/prisma";

export async function createPostTag(state: FormState, formData: FormData) {
    const data = {
        name: formData.get("tag")?.toString() ?? "",
        description: formData.get("description")?.toString() ?? "",
    }
    console.log(data)
  try {
    await tagSchema.validate(data,{
        abortEarly:false
    })
    if (!prisma) {
      throw new Error("Prisma client not initialized");
    }
    const isTagExist = await prisma.tag.findUnique({
        where: {
            name: data.name,
        },
    });

    if(isTagExist){
        const errors: Record<string, string> = {
            name: "Tag already exists",
        };
        return {
            errors,
        };
    }
    const addTag = await prisma.tag.create({
        data
    });
    return {
        name: addTag.name,
        description: addTag.description,
    };
  } catch (err) {
    console.log(err)
    if (err instanceof Yup.ValidationError) {
      const errors : Record<string, string> = {};
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
