import { prisma } from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = (await cookies()).get("session")?.value;
  const decryptSession = await decrypt(session);
  const { userId } = decryptSession as { userId: string };
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return NextResponse.json({
    status: "success",
    data: {
      name: user?.name,
      email: user?.email,
    },
  });
}
