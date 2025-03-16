import Image from "next/image";
import { prisma } from "../lib/prisma";
import { decrypt } from "../lib/session";
import { cookies } from "next/headers";

export default async function Profile() {
  const session = (await cookies()).get("session")?.value;
  const decryptSession = await decrypt(session);
  const { userId } = decryptSession as { userId: string };
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <Image
          src={"/profile.png"}
          className="rounded-full"
          alt="profile"
          width={42}
          height={42}
        />
        <p className="text-sm font-light text-white">Hi, {user?.name}</p>
      </div>
    </div>
  );
}
