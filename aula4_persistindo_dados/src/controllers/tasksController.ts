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

function create(req: Request, res: Response) {
    const title: string = String(req.body.title);
    const hasNumber = /\d/.test(title);

    const tasks: Task[] = tasksService.getAll();
    const taskExists: Task | undefined = tasks.find( task => task.title === title); 

    const resultValidate = inputValidate(title);
    
    if(resultValidate) {
        res.status(400).json({error: resultValidate});
        return;
    }

    const createdTask: Task | undefined = tasksService.createTask(title);
    return res.status(201).json({success: "Tarefa criada com sucesso.", createdTask});
};

function update( req: Request, res: Response) {
    const id = Number(req.params.id);
    const title: string = String(req.body.title);
    const hasNumber = /\d/.test(title);

    const tasks: Task[] = tasksService.getAll();
    const taskExists: Task | undefined = tasks.find( task => task.title === title);

    const taskIdExist = tasks.find( (task) => task.id === id );

    const resultValidate = inputValidate(title);
    if(resultValidate) {
        res.status(400).json({error: resultValidate});
        return;
    }
    
    if(!taskIdExist) {
        res.status(404).json({error: "Id não encontrado."});
        return;
    }
    if (taskExists) {
        res.status(400).json({erro: "Uma tarefa com este nome já existe."});
        return;
    }

    const updatedTask: Task | null = tasksService.updateTask(id, title);
    return res.status(202).json({success: "Tarefa atualizada com sucesso.", updatedTask});

}

function getById(req: Request, res: Response) {

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

// GET = Retorna todas as tarefas /tasks
// taskRouter.get( '/', (req: Request, res: Response ) => {
//     let arrayTasks: Task[] = tasks;
//     if(!arrayTasks) {
//         res.status(404).json({message: "Nenhuma tarefa encontrada!"});
//         return;
//     }
//     res.status(200).json({arrayTasks});
//     return;
// });

// // GET para buscar tarefa pelo ID
// taskRouter.get( '/:id', (req: Request, res: Response) => {
//     const id: number = Number(req.params.id);
//     const arrayTasks: Task[] = tasks;
//     if(!arrayTasks || arrayTasks.length === 0) {
//         res.status(404).json({message: "Tarefa não encontrada."});
//         return;
//     }
//     const taskFound: Task | undefined = arrayTasks.find( (task) => { return task.id === id });
//     res.status(200).json(
//        taskFound
//     )
//     return;
// });

// DELETE para deletar tarefa pelo ID
// taskRouter.delete( '/:id', (req: Request, res: Response) => {
//     const id: number = Number(req.params.id);
//     const taskIndex: number = tasks.findIndex( task => task.id === id );
//     if( taskIndex === -1 ) {
//         return res.status(404).json({error: "Tarefa não encontrada"});
//     };
//     tasks.splice(taskIndex, 1);
//     return res.status(200).json({ message: "Tarefa deletada com sucesso. :))" });
// });


// // POST = Envia tarefas para o servidor /tasks
// taskRouter.post('/', (req: Request, res: Response) => {
//     const task: Task = req.body;
//     if(!task) {
//         res.status(400).json({error: "Dados inválidos"});
//         return;
//     }
//     tasks.push({
//         id: nextId,
//         descricao: task.descricao,
//         done: false
//     });
//     const curId = nextId;
//     nextId++
//     res.status(201).json({id: curId, tarefa: task});
//     return;
// });


export default { show, getById, create, update, del };