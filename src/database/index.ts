import { createConnection } from "typeorm";
import ormConfig from "./ormConfig";

createConnection(ormConfig);
