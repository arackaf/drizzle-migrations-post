import { relations } from "drizzle-orm/relations";
import { users, tasks, epics, tags, tasksTags } from "./schema";

export const tasksRelations = relations(tasks, ({ one, many }) => ({
  user: one(users, {
    fields: [tasks.userId],
    references: [users.id],
  }),
  epic: one(epics, {
    fields: [tasks.epicId],
    references: [epics.id],
  }),
  tasksTags: many(tasksTags),
}));

export const usersRelations = relations(users, ({ many }) => ({
  tasks: many(tasks),
}));

export const epicsRelations = relations(epics, ({ many }) => ({
  tasks: many(tasks),
}));

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
