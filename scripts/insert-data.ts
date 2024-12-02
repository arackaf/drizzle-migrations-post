import { db } from "./db";
import { users } from "../drizzle-schema/schema";

async function run() {
  try {
    await db.insert(users).values({ id: 1, name: "Adam", username: "arackis", avatar: "" });

    console.log("Done");
  } catch (er) {
    console.log(er);
  }
}

run();
