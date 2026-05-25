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
    const id: number = Number(req.params.id);
    const arrayTasks: Task[] = tasks;
    if(!arrayTasks || arrayTasks.length === 0) {
        res.status(404).json({message: "Tarefa não encontrada."});
        return;
    }
    const taskFound: Task | undefined = arrayTasks.find( (task) => { return task.id === id });
    res.status(200).json(
       taskFound
    )
    return;
});

// DELETE para deletar tarefa pelo ID
taskRouter.delete( '/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const taskIndex: number = tasks.findIndex( task => task.id === id );
    if( taskIndex === -1 ) {
        return res.status(404).json({error: "Tarefa não encontrada"});
    };
    tasks.splice(taskIndex, 1);
    return res.status(200).json({ message: "Tarefa deletada com sucesso. :))" });
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