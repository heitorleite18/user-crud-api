import Fastify from "fastify";
import appRoutes from "./routes/routes";
import jwt from "@fastify/jwt";
import { FastifyRequest, FastifyReply } from "fastify";

const app = Fastify();

app.register(jwt, {
  secret: "super-secret-key", //TODO: depois trocar para .env
});

app.decorate(
  "authenticate",
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify();
    } catch (error) {
      return reply.code(401).send({ error: "Token inválido" });
    }
  }
);

app.register(appRoutes);

app.listen({ port: 3000 }).then(() => {
  console.log("Servidor rodando em http://localhost:3000");
});
