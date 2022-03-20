import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateEntityPreferencesController } from "./controllers/CreateEntityPreferencesController";
import { CreateFinancialEntriesController } from "./controllers/CreateFinancialEntriesController";
import { CreateMemberController } from "./controllers/CreateMemberController";
import { CreatePhilanthropyController } from "./controllers/CreatePhilanthropyController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateWorkController } from "./controllers/CreateWorkController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createPhilanthropyController = new CreatePhilanthropyController();
const createWorkController = new CreateWorkController();
const createFinancialEntriesController = new CreateFinancialEntriesController();
const createEntityPreferencesController =
  new CreateEntityPreferencesController();
const createMemberController = new CreateMemberController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/philanthropies", createPhilanthropyController.handle);
router.post("/works", createWorkController.handle);
router.post("/financial-entries", createFinancialEntriesController.handle);
router.post(
  "/entity-preferences",
  ensureAdmin,
  createEntityPreferencesController.handle
);
router.post("/members", ensureAdmin, createMemberController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
