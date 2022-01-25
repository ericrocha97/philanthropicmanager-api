import { Router } from "express";
import { CreateMemberController } from "./controllers/CreateMemberController";
import { CreatePhilanthropyController } from "./controllers/CreatePhilanthropyController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createPhilanthropyController = new CreatePhilanthropyController();
const createMemberController = new CreateMemberController();
const createUserController = new CreateUserController();

router.post("/philanthropy", createPhilanthropyController.handle);
router.post("/member", createMemberController.handle);
router.post("/user", createUserController.handle);

export { router };
