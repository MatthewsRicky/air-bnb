import { getServerSession } from "next-auth/next";

import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSession () {
  return await getServerSession(authOptions);
}

export default async function getSCurrentUser() {
  try {
    
  } catch (error: any) {
    return null;
  }
}