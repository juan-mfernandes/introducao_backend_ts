import { Router } from "express";
import tasksController from "../controllers/tasksController";

const tasksRouter = Router();

tasksRouter.post('/', tasksController.create);
tasksRouter.get('/', tasksController.show);
tasksRouter.get('/:id', tasksController.getById);
tasksRouter.put('/:id', tasksController.update);
tasksRouter.delete('/:id', tasksController.del);


export default tasksRouter;