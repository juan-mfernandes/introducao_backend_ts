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
function updateTask(id: number, newTitle: string ) {
    
}

// Função que marca tarefa como concluída
function doneTask(id: number) {
    
}

export default { createTask, getAll, getTaskById };