"server only";

import { randomBytes } from "crypto";
import NextAuth, { type AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/server/db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: true,
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
};

export default NextAuth(authOptions);
