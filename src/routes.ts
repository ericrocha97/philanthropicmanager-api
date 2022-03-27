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
import { RemoveFinancialEntriesController } from "./controllers/RemoveFinancialEntriesController";
import { RemovePhilanthropyController } from "./controllers/RemovePhilanthropyController";
import { RemoveWorkController } from "./controllers/RemoveWorkController";
import { UpdateFinancialEntriesController } from "./controllers/UpdateFinancialEntriesController";
import { UpdateMemberController } from "./controllers/UpdateMemberController";
import { UpdatePhilanthropyController } from "./controllers/UpdatePhilanthropyController";
import { UpdateWorkController } from "./controllers/UpdateWorkController";
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
const updatePhilanthropyController = new UpdatePhilanthropyController();
const removePhilanthropyController = new RemovePhilanthropyController();
const updateWorkController = new UpdateWorkController();
const removeWorkController = new RemoveWorkController();
const updateFinancialEntriesController = new UpdateFinancialEntriesController();
const removeFinancialEntriesController = new RemoveFinancialEntriesController();

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

router.put(
  "/philanthropies/",
  ensureAuthenticated,
  updatePhilanthropyController.handle
);

router.delete(
  "/philanthropies/",
  ensureAuthenticated,
  ensureAdmin,
  removePhilanthropyController.handle
);

router.put("/works", ensureAuthenticated, updateWorkController.handle);

router.delete(
  "/works",
  ensureAuthenticated,
  ensureAdmin,
  removeWorkController.handle
);

router.put(
  "/financial-entries",
  ensureAuthenticated,
  updateFinancialEntriesController.handle
);

router.delete(
  "/financial-entries",
  ensureAuthenticated,
  ensureAdmin,
  removeFinancialEntriesController.handle
);

export { router };
