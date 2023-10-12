"server only";

import { randomBytes } from "crypto";
import NextAuth, { type AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/server/db";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: [
    EmailProvider({
      generateVerificationToken: async () => {
        return randomBytes(32).toString("hex");
      },
      async sendVerificationRequest({ identifier: email, url }) {
        /** @todo run check against db that email is allowed to onboard (e.g. invites) */
        /** @note We're not sending any emails anywhere for now */

        /** The magic-link to sign-in users will be output to console only. * /
        /** Manually click the link from console and the user sign-in and session creation will succeed! */

        console.log(JSON.stringify({ SEND: { email, url } }, null, 2));
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 12 * 60 * 60, // 12 hours
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      if (!session.user.emailAdded) {
        session.user.emailAdded =
          (user as User).emailAdded !== null ? true : false;
      }

      if (!session.user.emailVerified) {
        session.user.emailVerified =
          (user as User).emailVerified !== null ? true : false;
      }
      if (!session?.user?.uuid) {
        session.user.uuid = (user as User).uuid;
      }
      return session;
    },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },

  pages: {
    signIn: "/de/join",
    signOut: "/de",
    error: "/de/join",
    verifyRequest: "/de/join/get-verified",
    newUser: "/de/join/get-started",
  },
};

export default NextAuth(authOptions);
