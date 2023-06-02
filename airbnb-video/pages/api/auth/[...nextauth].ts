import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/google"
import bcrypt from "bcrypt";


import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIEN_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text'},
        password: { label: 'password', type: 'password'},
      },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
        throw new Error('invalid credentials');
      }

      const user = await prisma.user.findUnique({
        where: {
          email: credentials.email
        }
      });

      if (!user || !user?.hashedPassword) {
        throw new Error('Invalid credentials')
      }
      const isCorrectPassword = bcrypt.compare(
        credentials.password,
        user.hashedPassword
      );

      if (!isCorrectPassword) {
        throw new Error('invalid  credentials');
      }

      return user;
    }
    })  
  ]
}