import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import  * as schema from './schema.js';


export const CreateDrizzle = (databaseUrl:string, authToken:string) => {
  
  const tursoClient = createClient({
    url: databaseUrl,
    authToken: authToken
  });

  return drizzle(tursoClient, { schema });
};

