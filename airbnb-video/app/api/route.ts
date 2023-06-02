import prisma from "@/app/libs/prismadb";
import bcrypt from "bcryptjs";
import { Request } from "next";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}
