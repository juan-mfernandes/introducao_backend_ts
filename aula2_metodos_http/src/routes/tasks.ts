import { Router,  Request, Response } from 'express';

const taskRouter = Router();

interface Task {
    id: number
    descricao: string
    done: boolean
};

let tasks: Task[] = [];
let nextId = 1;

// GET = Retorna todas as tarefas /tasks
taskRouter.get( '/', (req: Request, res: Response ) => {
    let arrayTasks: Task[] = tasks;
    if(!arrayTasks) {
        res.status(404).json({message: "Nenhuma tarefa encontrada!"});
        return;
    }
    res.status(200).json({arrayTasks});
    return;
});

// GET para buscar tarefa pelo ID
taskRouter.get( '/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
});

// DELETE para deletar tarefa pelo ID
taskRouter.delete( '/:id', (req: Request, res: Response) => {

});


// POST = Envia tarefas para o servidor /tasks
taskRouter.post('/', (req: Request, res: Response) => {
    const task: Task = req.body;
    if(!task) {
        res.status(400).json({error: "Dados inválidos"});
        return;
    }
    tasks.push({
        id: nextId,
        descricao: task.descricao,
        done: false
    });
    const curId = nextId;
    nextId++
    res.status(201).json({id: curId, tarefa: task});
    return;
});


export default taskRouter;