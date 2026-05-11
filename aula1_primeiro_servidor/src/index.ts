import express, {Request, Response } from 'express';

const app = express();
const port: number = 3001;

app.get( '/status', (req: Request, res: Response) => {
    res.status(200).json({ message: "Servidor OK!"});
    return;
});

// GET mostrando o horário do servidor
app.get( "/horario", (req: Request, res: Response) => {
    const time: Date = new Date();
    const horaFormatada: string = time.toLocaleTimeString();

    res.json({date: horaFormatada});
    return;
});

// GET mostrando nome, idade e periodo
app.get( "/aluno", (req: Request, res: Response) => {
    let aluno: string = "João";
    let idade: number = 20;
    let periodo: string = "2°";

    res.json({ aluno, idade, periodo });
    console.log(res.statusCode);
    return;
});


app.get("/teste" , (req: Request, res: Response) => {
    const text: string = "Teste!";
    res.json({message: text});
    return;
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});







