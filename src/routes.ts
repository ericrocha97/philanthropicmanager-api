import { Router } from "express";
import { CreatePhilanthropyController } from "./controllers/CreatePhilanthropyController";


const router = Router();

const createPhilanthropyController = new CreatePhilanthropyController();

router.post("/philanthropy", createPhilanthropyController.handle);

export { router };
