import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateEntityPreferencesController } from "./controllers/CreateEntityPreferencesController";
import { CreateFinancialEntriesController } from "./controllers/CreateFinancialEntriesController";
import { CreateMemberController } from "./controllers/CreateMemberController";
import { CreatePhilanthropyController } from "./controllers/CreatePhilanthropyController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateWorkController } from "./controllers/CreateWorkController";
import { DisableMemberController } from "./controllers/DisableMemberController";
import { ListCalendarController } from "./controllers/ListCalendarController";
import { ListFinancialEntriesController } from "./controllers/ListFinancialEntriesController";
import { ListMemberController } from "./controllers/ListMemberController";
import { UpdateMemberController } from "./controllers/UpdateMemberController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createPhilanthropyController = new CreatePhilanthropyController();
const createWorkController = new CreateWorkController();
const createFinancialEntriesController = new CreateFinancialEntriesController();
const createEntityPreferencesController =
  new CreateEntityPreferencesController();
const createMemberController = new CreateMemberController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listCalendarController = new ListCalendarController();
const listMemberController = new ListMemberController();
const listFinancialEntriesController = new ListFinancialEntriesController();
const updateMemberController = new UpdateMemberController();
const disableMemberController = new DisableMemberController();

router.post(
  "/philanthropies",
  ensureAuthenticated,
  createPhilanthropyController.handle
);

router.post("/works", ensureAuthenticated, createWorkController.handle);

router.post(
  "/financial-entries",
  ensureAuthenticated,
  createFinancialEntriesController.handle
);

router.post(
  "/entity-preferences",
  ensureAuthenticated,
  ensureAdmin,
  createEntityPreferencesController.handle
);

router.post(
  "/members",
  ensureAuthenticated,
  ensureAdmin,
  createMemberController.handle
);

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);

router.get("/calendar", ensureAuthenticated, listCalendarController.handle);

router.get("/members", ensureAuthenticated, listMemberController.handle);

router.get(
  "/financial-entries",
  ensureAuthenticated,
  listFinancialEntriesController.handle
);

router.put(
  "/members/",
  ensureAuthenticated,
  ensureAdmin,
  updateMemberController.handle
);

router.delete(
  "/members/",
  ensureAuthenticated,
  ensureAdmin,
  disableMemberController.handle
);

export { router };
