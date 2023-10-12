import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      uuid: string;
      emailAdded: boolean | null;
      emailVerified: boolean | null;
    } & DefaultSession["user"];
  }
}
