import Database from 'better-sqlite3';
import path from 'path';

// Define caminho do arquivo
const dbPath: string = path.resolve(__dirname, '../tasks.db');

// Define banco de dados e tipo da variável
const db: Database.Database = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        title      TEXT    NOT NULL,
        done       INTEGER NOT NULL DEFAULT 0,
        created_at TEXT    NOT NULL DEFAULT (datetime('now'))
    )
`);

export default db;




