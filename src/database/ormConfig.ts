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
  entities: [path.join(__dirname, "..", "entities", "*.*")],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    migrationsDir: path.join(__dirname, "migrations", "*.*"),
    entitiesDir: path.join(__dirname, "..", "entities", "*.*")
  },
  synchronize: false
} as ConnectionOptions;
