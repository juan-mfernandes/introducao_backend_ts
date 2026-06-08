import db from "../database/db"

export interface Task {
    id: number
    title: string
    done: boolean
};

interface TaskRow {
    id: number
    title: string
    done: number
    created_at: string
}

function toTask(row: TaskRow): Task {
    return {
        ...row,
        done: row.done === 1
    };
};

// Função que lista todas as tarefas
function getAll(): Task[] {
    const rows = db.prepare(`SELECT * FROM tasks`).all() as TaskRow[];
    return rows.map(toTask);
};

// Função que lista tarefa por ID
function getTaskById(id: number): Task | undefined {
    const row = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id) as TaskRow | undefined
    if(!row) {
        return undefined;
    }
    return toTask(row);
};

// Função que cria uma tarefa
function createTask(title: string): Task | null {    
    const smtm = db.prepare(`INSERT INTO tasks (title) VALUES (?)`);
    const result = smtm.run(title);

    const newTask = getTaskById(result.lastInsertRowid as number);
    return newTask!;
};

// Função que atualiza título da tarefa
function updateTask(id: number, newTitle: string ): Task | null {
    const stmt = db.prepare(`UPDATE tasks SET title = ? WHERE id = ?`);
    const result = stmt.run(newTitle, id);
    
    if(result.changes === 0) {
        return null;
    };
    
    return getTaskById(id)!;

}

// Função que marca tarefa como concluída
function doneTask(id: number) {
    
}

export default { createTask, getAll, getTaskById, updateTask };