import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";
const login = async (credentials) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email: credentials.email },
      include: { roles: true }, // Inclure les rôles
    });

    if (!user) throw new Error("Wrong credentials!");

    const match = await bcrypt.compare(credentials.password, user.password);
    if (!match) throw new Error("Wrong credentials!");

    // Convertir les rôles en un tableau de noms de rôles pour simplification
    const userWithRoles = {
      ...user,
      roles: user.roles.map(role => role.name),
    };

    return userWithRoles;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.roles = user.roles; // Ajouter les rôles au token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.roles = token.roles; // Ajouter les rôles à la session
      }
      return session;
    },
  },
});
