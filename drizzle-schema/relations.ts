import { relations } from "drizzle-orm/relations";
import { tags, tasksTags, tasks, users, epics } from "./schema";

export const tasksTagsRelations = relations(tasksTags, ({ one }) => ({
  tag: one(tags, {
    fields: [tasksTags.tag],
    references: [tags.id],
  }),
  task: one(tasks, {
    fields: [tasksTags.task],
    references: [tasks.id],
  }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  tasksTags: many(tasksTags),
}));

export const tasksRelations = relations(tasks, ({ one, many }) => ({
  tasksTags: many(tasksTags),
  user: one(users, {
    fields: [tasks.userid],
    references: [users.id],
  }),
  epic: one(epics, {
    fields: [tasks.epicid],
    references: [epics.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  tasks: many(tasks),
}));

export const epicsRelations = relations(epics, ({ many }) => ({
  tasks: many(tasks),
}));
