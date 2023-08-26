import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      uuid: string;
    } & DefaultSession["user"];
  }
}
