import { cookies } from "next/headers";
import { decrypt } from "./session";

export function createSlug(title: string): string {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
}

export async function getUserId(): Promise<string> {
  const session = (await cookies()).get("session")?.value;
  const decryptSession = await decrypt(session);
  const { userId } = decryptSession as { userId: string };
  return userId;
}

enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

export function stringToPostStatus(stringStatus: string): PostStatus {
  switch (stringStatus) {
    case "DRAFT":
      return PostStatus.DRAFT;
    case "PUBLISHED":
      return PostStatus.PUBLISHED;
    case "ARCHIVED":
      return PostStatus.ARCHIVED;
    default:
      return PostStatus.DRAFT;
  }
}
