import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "../drizzle-schema/schema";
import * as relations from "../drizzle-schema/relations";

import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: `postgres://docker:docker@localhost:5432/jira`,
});

export const db = drizzle({ client: pool, schema: { ...schema, ...relations } });
