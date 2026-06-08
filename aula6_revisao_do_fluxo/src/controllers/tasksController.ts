import { Request, Response } from 'express';
import tasksService, { Task } from '../services/tasksService';

// CRUD de Tasks (CREATE, READ, UPDATE, DELETE)

// Controller que lida com requisições para listar todas tarefas
function show(req: Request, res: Response): any {
    const tasks: Task[] = tasksService.getAll();
    if(!tasks || tasks.length === 0) {
        res.status(404).json({error: "Nenhuma tarefa encontrada"});
        return;
    }
    res.status(200).json({tasks: tasks});
    return;
}

function create(req: Request, res: Response) {
    const title: string = String(req.body.title);  

    const createdTask: Task | null = tasksService.createTask(title);
    return res.status(201).json({success: "Tarefa criada com sucesso.", createdTask});
};

function getById(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const task: Task | null = tasksService.getTaskById(id);

    if(!task) {
        res.status(404).json({error: "Tarefa não encontrada."});
        return;
    }

    res.status(200).json({task});
    return;
}

function update( req: Request, res: Response) {
    const id = Number(req.params.id);
    const title: string = String(req.body.title);

    const tasks: Task[] = tasksService.getAll();
    const taskExists: Task | undefined = tasks.find( task => task.title === title);

    const taskIdExist = tasks.find( (task) => task.id === id );
    
    if(!taskIdExist) {
        res.status(404).json({error: "Id não encontrado."});
        return;
    }
    if (taskExists) {
        res.status(400).json({error: "Uma tarefa com este nome já existe."});
        return;
    }

    const updatedTask: Task | null = tasksService.updateTask(id, title);
    return res.status(202).json({success: "Tarefa atualizada com sucesso.", updatedTask});

}

function doneTask(req: Request, res: Response) {
  const id = Number(req.params.id);
  const paramDone = req.body.done;

  const task: Task | null = tasksService.getTaskById(id);

  if(!task) {
    res.status(404).json({error: "Tarefa não encontrada."});
    return;
  }

  if(paramDone !== undefined) {
    const done = paramDone === true ? 1 : 0;
    const updatedTask: Task | null = tasksService.doneTask(id, done);
    return res.status(200).json({success: "Tarefa atualizada com sucesso.", updatedTask});
  }

  return res.status(200).json({task});
}

function del(req: Request, res: Response) {
    const id = Number(req.params.id);

    const deletedTask = tasksService.deleteTask(id);

    if(deletedTask === null || deletedTask.length === 0 ) {
        res.status(404).json({success: "Id da tarefa não encontrado."});
        return;
    };

    res.status(202).json({success: "Tarefa deletada com sucesso."});
    return;
}

export default { show, getById, create, update, doneTask, del };