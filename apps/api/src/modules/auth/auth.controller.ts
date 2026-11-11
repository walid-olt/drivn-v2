import { All, Controller, Req, Res } from "@nestjs/common";
import { toNodeHandler } from "better-auth/node";
import { AuthService } from "./auth.service.js";
import type { Request, Response } from "express";

@Controller("/api/auth")
export class AuthController {
  private handler: ReturnType<typeof toNodeHandler>;
  constructor(private readonly authService: AuthService) {
    this.handler = toNodeHandler(this.authService.getInstance());
  }
  @All("{*path}")
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    return this.handler(req, res);
  }
}
