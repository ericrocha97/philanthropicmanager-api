import { Router } from "express";
import { CreateEntityPreferencesController } from "./controllers/CreateEntityPreferencesController";
import { CreateFinancialEntriesController } from "./controllers/CreateFinancialEntriesController";
import { CreateMemberController } from "./controllers/CreateMemberController";
import { CreatePhilanthropyController } from "./controllers/CreatePhilanthropyController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateWorkController } from "./controllers/CreateWorkController";

const router = Router();

const createPhilanthropyController = new CreatePhilanthropyController();
const createWorkController = new CreateWorkController();
const createFinancialEntriesController = new CreateFinancialEntriesController();
const createEntityPreferencesController =
  new CreateEntityPreferencesController();
const createMemberController = new CreateMemberController();
const createUserController = new CreateUserController();

router.post("/philanthropy", createPhilanthropyController.handle);
router.post("/work", createWorkController.handle);
router.post("/financial-entries", createFinancialEntriesController.handle);
router.post("/entity-preferences", createEntityPreferencesController.handle);
router.post("/member", createMemberController.handle);
router.post("/user", createUserController.handle);

export { router };
