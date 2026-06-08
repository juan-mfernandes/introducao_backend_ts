import Database from "better-sqlite3";
import path from "path";

const p = path.resolve(__dirname, '../tasks.sql');

const db: Database.Database = new Database(p);

db.exec( 
    `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER NOT NULL PRIMARY KEY,
        title TEXT NOT NULL,
        done INTEGER NOT NULL DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
`);

export default db;