import { Router } from "express";
import tasksController from "../controllers/tasksController";

const tasksRouter = Router();

tasksRouter.post('/', tasksController.create);
tasksRouter.get('/', tasksController.show);
tasksRouter.put('/:id', tasksController.update);


export default tasksRouter;