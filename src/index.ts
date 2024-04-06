import { Hono } from "hono";
import { userRoutes } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRoutes);
app.route("/api/v1/blog", blogRouter);

export default app;
