import { Router } from "express";
import tasksController from "../controllers/tasksController";
import validateInput from "../middleware/inputValidator";

const tasksRouter = Router();

tasksRouter.post('/', validateInput ,tasksController.create);
tasksRouter.get('/', tasksController.show);
tasksRouter.get('/:id', tasksController.getById);
tasksRouter.put('/:id', tasksController.update);
tasksRouter.put('/done/:id', tasksController.doneTask);
tasksRouter.delete('/:id', tasksController.del);

export default tasksRouter;