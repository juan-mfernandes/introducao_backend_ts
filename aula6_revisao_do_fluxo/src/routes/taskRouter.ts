import { Router } from "express";
import tasksController from "../controllers/tasksController";
import { validateTaskTitle } from "../middleware/validateTaskTitle";

const tasksRouter = Router();

tasksRouter.post('/', validateTaskTitle, tasksController.create);
tasksRouter.get('/', tasksController.show);
tasksRouter.put('/:id/done', tasksController.doneTask);
tasksRouter.put('/:id', validateTaskTitle, tasksController.update);
tasksRouter.delete('/:id', tasksController.del);


export default tasksRouter;