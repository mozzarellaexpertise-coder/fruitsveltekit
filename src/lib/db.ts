// src/lib/db.ts (THE FIX)
import { neon } from "@neondatabase/serverless";
// 🚨 CHANGE THIS LINE 🚨: Import the variable from SvelteKit's private environment
import { DATABASE_URL } from '$env/static/private'; 

// 🛑 DELETE the old line: const sql = neon(process.env.DATABASE_URL!);

// ✅ USE THIS LINE: SvelteKit guarantees this is loaded from your .env
const sql = neon(DATABASE_URL); 

export default sql;