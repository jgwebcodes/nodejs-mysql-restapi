import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from "./config.js";

// FOR PRODUCTION
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_NAME,
    // ssl: { rejectUnauthorized: false },
});
