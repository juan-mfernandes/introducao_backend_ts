"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let tasks = [];
let nextId = 1;
// Função que lista todas as tarefas
function getAll() {
    return tasks;
}
;
// Função que lista tarefa por ID
function getTaskById(id) {
    const arrayTasks = tasks;
    const taskFound = arrayTasks.find((task) => { return task.id === id; });
    return taskFound;
}
;
// Função que cria uma tarefa
function createTask(title) {
    tasks.push({
        id: nextId,
        title: title,
        done: false
    });
    const createdTask = tasks.find(task => task.id === nextId);
    nextId++;
    return createdTask;
}
;
// Função que atualiza título da tarefa
function updateTask(id, newTitle) {
}
// Função que marca tarefa como concluída
function doneTask(id) {
}
exports.default = { createTask, getAll, getTaskById };
//# sourceMappingURL=tasksService.js.map