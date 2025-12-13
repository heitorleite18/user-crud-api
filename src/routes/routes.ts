import { FastifyInstance } from "fastify";
import authRoutes from "./auth/auth.routes";

export default async function appRoutes(app: FastifyInstance) {
  app.register(authRoutes, { prefix: "/auth" });
}
