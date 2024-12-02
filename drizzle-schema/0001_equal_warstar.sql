ALTER TABLE "tasks" DROP CONSTRAINT "fk_task_user";
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "importance" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "fk_task_user" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_tasks_epicId" ON "tasks" USING btree ("epic_id");