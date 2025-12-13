import { FastifyInstance } from "fastify";
import { helloController } from "./auth.controller";

export default async function authRoutes(app: FastifyInstance) {
  app.get("/hello", helloController);
}
