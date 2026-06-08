"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskRouter_1 = __importDefault(require("./routes/taskRouter"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    res.json({ message: "Servidor OK!" });
    return;
});
app.use('/tasks', taskRouter_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//# sourceMappingURL=index.js.map