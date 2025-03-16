"use server";
import { FormState, categorySchema } from "../lib/definitions";
import { prisma } from "../lib/prisma";
import * as Yup from "yup";

export async function createPostCategory(state: FormState, formData: FormData) {
  const data = {
    name: formData.get("category")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
  try {
     await categorySchema.validate(data, {
      abortEarly: false,
    });
    const categoryExist = await prisma.category.findUnique({
      where: {
        name: data.name,
      },
    });
    if (categoryExist) {
      const errors: Record<string, string> = {
        name: "Category already exists",
      };
      return {
        errors,
      };
    }
    await prisma.category.create({
      data,
    });
    return {
      success: "Category created successfully",
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

export async function findManyCategory() {
  const data = await prisma.category.findMany();
  return data;
}

export async function deletePostCategory(state: FormState, formData: FormData) {
  const categoryId = formData.get("categoryId")?.toString() ?? "";
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!category) {
    const errors: Record<string, string> = {
      categoryId: "Category not found",
    };
    return {
      errors,
    };
  }
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  return {
    success: "Category deleted successfully",
  };
}

export async function deletePostCategoryById(categoryId: string) {
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  return {
    success: "Category deleted successfully",
  };
}

export async function updatePostCategory(state:FormState, formData: FormData) {
  const data = {
    id: formData.get("categoryId")?.toString() ?? "",
    name: formData.get("category")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };

  try {
    await categorySchema.validate(data, {
      abortEarly: false,
    });
    const categoryExist = await prisma.category.findUnique({
      where: {
        name: data.name,
      },
    });
    if (categoryExist) {
      const errors: Record<string, string> = {
        name: "Category already exists",
      };
      return {
        errors,
      };
    }
    await prisma.category.update({
      where: {
        id: data.id,
      },
      data,
    });
    return {
      success: "Category updated successfully",
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
