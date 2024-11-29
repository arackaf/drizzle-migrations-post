import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle-schema",
  dbCredentials: {
    database: "jira",
    host: "localhost",
    port: 5432,
    user: "docker",
    password: "docker",
    ssl: false,
  },
});
