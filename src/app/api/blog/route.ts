import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const data = await prisma.post.findMany();
  return Response.json({
    code: 200,
    status: "success",
    data
  });
}

export async function POST(){
    
}
