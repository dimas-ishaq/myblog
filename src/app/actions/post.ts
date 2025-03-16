"use server";

import { prisma } from "../lib/prisma";
import { postSchema } from "../lib/definitions";
import { createSlug, getUserId, stringToPostStatus } from "../lib/post";

export async function createPost(formData: FormData) {
  const data = {
    title: formData.get("title")?.toString() ?? "",
    content: formData.get("content")?.toString() ?? "",
    category: formData.get("category")?.toString() ?? "",
    tag: formData.get("tag")?.toString() ?? "",
    status: formData.get("status")?.toString() ?? "",
  };
  const slug = createSlug(data.title);
  const authorId = await getUserId();
  const status = stringToPostStatus(data.status);
  try {
    await postSchema.validate(data, { abortEarly: false });
    await prisma.post.create({
      data: {
        title: data.title,
        slug: slug,
        content: data.content,
        status: status,
        publishedAt: new Date(),
        categories: {
          connect: [{ id: data.category }],
        },
        tags: {
          connect: [{ id: data.tag }],
        },
        authorId: authorId,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getAllPost() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
      tags: true,
    },
  });
  return posts;
}
