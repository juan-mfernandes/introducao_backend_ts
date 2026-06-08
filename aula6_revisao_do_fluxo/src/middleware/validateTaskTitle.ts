import { Request, Response, NextFunction } from 'express';
import tasksService, { Task } from '../services/tasksService';

function inputValidate(title: string): string | undefined {
    const hasNumber = /\d/.test(title);

    const tasks: Task[] = tasksService.getAll();
    const taskExists: Task | undefined = tasks.find( task => task.title === title); 

    let errorMessage: string;

    if(!title || title.trim() === ""){
        errorMessage = "Formato de texto inválido.";
        return errorMessage;
    } else if(title.length < 3) {
        errorMessage = "O título precisa ter pelo menos 3 caracteres.";
        return errorMessage
    } else if(title.length > 20) {
        errorMessage = "O título precisa ter no máximo 20 caracteres.";
        return errorMessage;
    } else if (taskExists !== undefined) {    
        errorMessage = "Uma tarefa com esse título já existe."
        return errorMessage;
    } else if(hasNumber) {
        errorMessage = "Um título não pode conter números.";
        return errorMessage;
    };
}

export function validateTaskTitle(req: Request, res: Response, next: NextFunction) {
  const { title } = req.body;

  const validationError = inputValidate(title);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  next();
}

