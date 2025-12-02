import sql from '$lib/db';

export async function load() {
  const fruits = await sql`SELECT * FROM fruits ORDER BY id ASC`;
  return { fruits };
}