import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { nanoid } from 'nanoid'

export const tasks = sqliteTable("tasks", {
    id: text("id").primaryKey().$defaultFn(nanoid),
    description: text("description"),
    status: text("status", { enum: ['todo', 'active', 'done', 'canceled'] }),
    created_at: integer("created_at", {mode: 'timestamp'}),
    updated_at: integer("updated_at", {mode: 'timestamp'}),
});


