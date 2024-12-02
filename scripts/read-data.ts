import { db } from "./db";

async function run() {
  const tasks = await db.query.tasks.findMany({
    with: {
      user: true,
    },
  });

  for (const task of tasks) {
    console.log(task);
  }
}

run();
