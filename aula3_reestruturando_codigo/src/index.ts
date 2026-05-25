import express, {Request, Response } from 'express';
import taskRouter from './routes/tasks';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.json({message: "Servidor OK!"});
    return;
})

app.use( '/tasks', taskRouter);

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
})