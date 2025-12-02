import type { RequestHandler } from '@sveltejs/kit';
import sql from '$lib/db';

// GET all fruits
export const GET: RequestHandler = async () => {
  const fruits = await sql`SELECT * FROM fruits ORDER BY id ASC`;
  return new Response(JSON.stringify(fruits), { status: 200 });
};

// CREATE fruit
export const POST: RequestHandler = async ({ request }) => {
  const { name } = await request.json();
  await sql`INSERT INTO fruits (name) VALUES (${name})`;
  return new Response('OK', { status: 201 });
};

// UPDATE fruit
export const PUT: RequestHandler = async ({ request }) => {
  const { id, name } = await request.json();
  await sql`UPDATE fruits SET name = ${name} WHERE id = ${id}`;
  return new Response('OK', { status: 200 });
};

// DELETE fruit
export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();
  await sql`DELETE FROM fruits WHERE id = ${id}`;
  return new Response('OK', { status: 200 });
};