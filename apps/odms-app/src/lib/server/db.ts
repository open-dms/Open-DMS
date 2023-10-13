import { PrismaClient } from "@prisma/client";

/** @note use and initiate a single prisma client instance app wide */
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: [{ level: "query", emit: "event" }, "info", "warn", "error"],
  });

/** @note prevent prisma client to initiate over and over during dev (hot-reloading) */
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

/** @note helper to quickly access prisma models/collections */
export const prismaFetch = async (model: string) => {
  switch (model) {
    case "node":
      return { db: prisma.node };
    case "event":
      return prisma.account;
    default:
      return prisma;
  }
};
