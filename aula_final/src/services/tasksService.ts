import db from "../db/database"

export interface Task {
    id: number
    title: string
    done: boolean
    created_at: string
};

interface TaskAsRow {
    id: number
    title: string
    done: number
    created_at: string
};

function toTask(taskRow: TaskAsRow): Task {
    return {
        ...taskRow,
        done: taskRow.done === 1
    };
};

let tasks: Task[] = [];

// Função que lista todas as tarefas
function getAll(): Task[] {
    const rows = db.prepare(`SELECT * FROM tasks;`).all() as TaskAsRow[];
    return rows.map(toTask);
};

// Função que lista tarefa por ID
function getTaskById(id: number): Task | null {
    const row = db.prepare(`SELECT * FROM tasks WHERE id = ?;`).get(id) as TaskAsRow;
    if(!row) {
        return null;
    };
    return toTask(row)
};  

// Função que cria uma tarefa
function createTask(title: string): Task | null {
    const stmt = db.prepare(`INSERT INTO tasks (title) VALUES (?);`);
    const result = stmt.run(title);

    const taskId = result.lastInsertRowid as number;
    const newTask = getTaskById(taskId);

    return newTask;
};

// Função que atualiza título da tarefa
function updateTask(id: number, newTitle: string ): Task | null {
    const foundTask = getTaskById(id);

    if(!foundTask) {
        return null;
    };

    const stmt = db.prepare(`UPDATE tasks SET title = ? WHERE id = ?;`);
    stmt.run(newTitle, foundTask.id);

    const updatedTask = getTaskById(foundTask.id);

    return updatedTask!;

}
// Função que marca tarefa como concluída
function doneTask(id: number): Task | null {
    const result = db.prepare(`UPDATE tasks SET done = 1 WHERE id = ?;`).run(id);
    if(result.changes === 0) {
        return null;
    };

    return getTaskById(id);
}

// Função que deleta uma tarefa
function deleteTask(id: number): Task[] | null {
    const foundTask = tasks.find( (task) => task.id === id );
    if(!foundTask) {
        return null;
    }

    const deletedTask = tasks.splice(foundTask.id -1, 1);
    if(!deletedTask) {
        return null;
    }

    return deletedTask;
}

export default { createTask, getAll, getTaskById, updateTask, doneTask, deleteTask };