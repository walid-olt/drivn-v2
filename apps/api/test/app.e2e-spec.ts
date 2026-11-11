import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/modules/prisma/prisma.service.js";

describe("Auth (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        $connect: async () => {},
        $disconnect: async () => {},
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("GET /api/auth/ok", () => {
    return request(app.getHttpServer()).get("/api/auth/ok").expect(200).expect({ ok: true });
  });

  afterAll(async () => {
    await app.close();
  });
});
