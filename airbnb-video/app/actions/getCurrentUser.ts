import { getServerSession } from "next-auth/next";

import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSession () {
  return await getServerSession(authOptions);
}

export default async function getSCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.findUnique({
      where: {
        email: session.user.email as string
      }
    });

    if (!currentUser) {
      return null;
    }
  } catch (error: any) {
    return null;
  }
}