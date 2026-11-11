import { Injectable, Inject } from "@nestjs/common";
import { BETTER_AUTH } from "./auth.constants.js";
import { type AuthInstance } from "./auth.config.js";

@Injectable()
export class AuthService {
  constructor(@Inject(BETTER_AUTH) private readonly auth: AuthInstance) {}
  getInstance() {
    return this.auth;
  }
}
