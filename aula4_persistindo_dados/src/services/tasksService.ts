export interface Task {
    id: number
    title: string
    done: boolean
};

let tasks: Task[] = [];
let nextId = 1;

// Função que lista todas as tarefas
function getAll(): Task[] {
    return tasks;
};

// Função que lista tarefa por ID
function getTaskById(id: number): Task | undefined {
    const arrayTasks: Task[] = tasks;
    const taskFound: Task | undefined = arrayTasks.find( (task) => { return task.id === id });
    
    return taskFound;
};

// Função que cria uma tarefa
function createTask(title: string): Task | undefined {    
    tasks.push({
        id: nextId,
        title: title,
        done: false
    });
    const createdTask: Task | undefined  = tasks.find( task => task.id === nextId);
    nextId++
    return createdTask;
};

// Função que atualiza título da tarefa
function updateTask(id: number, newTitle: string ): Task | null {
    const foundTask = getTaskById(id);

    if(!foundTask) {
        return null;
    };

    foundTask.title = newTitle;
    return foundTask;

}

// Função que marca tarefa como concluída
function doneTask(id: number) {
    
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