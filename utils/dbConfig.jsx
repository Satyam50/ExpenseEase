import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://ai-interview-mocker_owner:QnNIKs3RUz7q@ep-quiet-bar-a5a748rf.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require');
export const db = drizzle(sql,{schema});