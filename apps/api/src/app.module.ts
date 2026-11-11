import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module.js";
import path from "path";
import { PrismaModule } from "./modules/prisma/prisma.module.js";
const envFilePath = path.resolve(process.cwd(), ".env.local");
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
