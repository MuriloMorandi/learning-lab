import dotenv from 'dotenv';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { CreateDrizzle } from "./client.js";
import * as schema from './schema.js';

dotenv.config();

const seed = async () => {
    const db = CreateDrizzle(process.env.DATABASE_URL || '', process.env.DATABASE_AUTH || '');  
    
    await clearAllTables(db);
    await insertInitialData(db);

    console.log('Seed completed');
};


const clearAllTables = async (db:LibSQLDatabase<typeof schema>) => { 
    await db.delete(schema.tasks);
};

const insertInitialData = async (db:LibSQLDatabase<typeof schema>) => {
    await db.insert(schema.tasks).values([
        {
            description: 'First todo',
            status: "todo",
            created_at: new Date()
        },
        {
            description: 'Second todo',
            status: "active",
            created_at: new Date()
        },
        {
            description: 'Third todo',
            status: "done",
            created_at: new Date()
        },
        {
            description: 'Fourth todo',
            status: "canceled",
            created_at: new Date()
        },
    ]);
};

seed().catch((error) => {
  console.error("Seed failed: ", error);
  process.exit(1);
});