"use server";

import {
  userSignUpSchema,
  userSignInSchema,
  FormState,
} from "../lib/definitions";
import * as Yup from "yup";
import { hashPassword } from "../lib/bcrypt";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
import { deleteSession } from "../lib/session";
import { createSession } from "../lib/session";
import { comparePassword } from "../lib/bcrypt";

export async function signup(state: FormState, formData: FormData) {
  const data = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };
  try {
     await userSignUpSchema.validate(data, {
      abortEarly: false,
    });
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

  const { name, email, password } = data;
  const hashedPassword = await hashPassword(password);

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    const errors: Record<string, string> = {
      email: "Email already exists",
    };
    return {
      errors,
    };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  redirect("/sign-in");
}

export async function signin(state: FormState, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };
  try {
     await userSignInSchema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    console.error(err);
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

  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    const errors: Record<string, string> = {
      email: "Email not found",
    };
    return {
      errors,
    };
  }
  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    const errors: Record<string, string> = {
      password: "Password is incorrect",
    };
    return {
      errors,
    };
  }
  await createSession(user.id);
  redirect("/dashboard");
}

export async function signout() {
  await deleteSession();
  redirect("/");
}
