import { db } from "./db";
import { tasks, users } from "../drizzle-schema/schema";

async function run() {
  try {
    await db.insert(users).values({ id: 1, name: "Adam Rackis", username: "arackis", avatar: "" });
    await db.insert(users).values({ id: 2, name: "Linus Torvalds", username: "ltorvalds", avatar: "" });

    await db.insert(tasks).values({ id: 1, name: "JavaScript Task 1", userId: 1 });
    await db.insert(tasks).values({ id: 2, name: "JavaScript Task 2", userId: 1 });
    await db.insert(tasks).values({ id: 3, name: "JavaScript Task 3", userId: 1 });

    await db.insert(tasks).values({ id: 4, name: "Linux Task 1", userId: 2 });
    await db.insert(tasks).values({ id: 5, name: "Linux Task 2", userId: 2 });
    await db.insert(tasks).values({ id: 6, name: "Linux Task 3", userId: 2 });
    await db.insert(tasks).values({ id: 7, name: "Linux Task 4", userId: 2 });

    console.log("Done");
  } catch (er) {
    console.log(er);
  }
}

run();
