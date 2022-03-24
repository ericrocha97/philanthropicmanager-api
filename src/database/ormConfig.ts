import { ConnectionOptions } from "typeorm";
import path from "path";

export default {
  name: "default",
  host: process.env.DB_HOST,
  type: "postgres",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/entities"
  },
  synchronize: false
} as ConnectionOptions;
