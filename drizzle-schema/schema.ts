import { pgTable, serial, varchar, text, date, foreignKey, integer, index } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial().primaryKey().notNull(),
  username: varchar({ length: 50 }),
  name: varchar({ length: 250 }),
  avatar: varchar({ length: 500 }),
});

export const epics = pgTable("epics", {
  id: serial().primaryKey().notNull(),
  name: varchar({ length: 250 }),
  description: text(),
  due: date(),
});

export const tags = pgTable("tags", {
  id: serial().primaryKey().notNull(),
  name: varchar({ length: 250 }),
});

export const tasksTags = pgTable(
  "tasks_tags",
  {
    id: serial().primaryKey().notNull(),
    task: integer(),
    tag: integer(),
  },
  (table) => {
    return {
      fkTasksTagsTag: foreignKey({
        columns: [table.tag],
        foreignColumns: [tags.id],
        name: "fk_tasks_tags_tag",
      }),
      fkTasksTagsTask: foreignKey({
        columns: [table.task],
        foreignColumns: [tasks.id],
        name: "fk_tasks_tags_task",
      }),
    };
  }
);

export const tasks = pgTable(
  "tasks",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 250 }),
    epicid: integer(),
    userid: integer(),
    importance: integer(),
  },
  (table) => {
    return {
      idxTasksEpic: index("idx_tasks_epic").using("btree", table.epicid.asc().nullsLast().op("int4_ops")),
      fkTaskUser: foreignKey({
        columns: [table.userid],
        foreignColumns: [users.id],
        name: "fk_task_user",
      }),
      fkTaskEpic: foreignKey({
        columns: [table.epicid],
        foreignColumns: [epics.id],
        name: "fk_task_epic",
      }),
    };
  }
);
