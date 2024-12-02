import 'dotenv/config';
import postgres from "postgres";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, SSLMODE } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=${SSLMODE}`;

export const sql = postgres(URL);
