import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { PrismaModule } from "../prisma/prisma.module.js";
import { BETTER_AUTH } from "./auth.constants.js";
import { ConfigService } from "@nestjs/config";
import { createBetterAuth } from "./auth.config.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { AuthController } from "./auth.controller.js";

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: BETTER_AUTH,
      inject: [ConfigService, PrismaService],
      useFactory: (cf: ConfigService, prisma: PrismaService) => {
        return createBetterAuth(prisma, cf);
      },
    },
    AuthService,
  ],
  exports: [BETTER_AUTH, AuthService],
  imports: [PrismaModule],
})
export class AuthModule {}
