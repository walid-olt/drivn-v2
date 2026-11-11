import { ConfigService } from "@nestjs/config";
import type { PrismaClient } from "../../lib/prisma/client.js";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

const betterAuthOpts = {
  advanced: {
    /*
     * NOTE:
     * enable joins so better-auth can fetch related data in a single query,
     * this is supported by the prisma adapter
     */
    database: {
      generateId: "uuid",
      joins: true,
    },
  },
  user: {
    additionalFields: {
      type: {
        input: false,
        type: "string",
        required: true,
        defaultValue: "agency_member",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions;

export function createBetterAuth(prisma: PrismaClient, cf: ConfigService) {
  return betterAuth({
    ...betterAuthOpts,
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    secret: cf.getOrThrow("BETTER_AUTH_SECRET"),
    baseURL: cf.getOrThrow("BETTER_AUTH_URL"),
  });
}

export type AuthInstance = ReturnType<typeof createBetterAuth>;
export default betterAuthOpts;
