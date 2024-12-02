import { db } from "./db";

async function run() {
  const users = await db.query.users.findMany({});

  console.log({ users });
}

run();
