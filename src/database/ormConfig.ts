import url from "url";
import { ConnectionOptions } from "typeorm";
const DATABASE_URL = process.env.DATABASE_URL;
const db_url = url.parse(DATABASE_URL);
const user = db_url.auth.substr(0, db_url.auth.indexOf(":"));
const pass = db_url.auth.substr(
  db_url.auth.indexOf(":") + 1,
  db_url.auth.length
);
const host = db_url.hostname;
const port = db_url.port;
const db = db_url.path.slice(1);

export default {
  name: "default",
  host: host,

  type: "postgres",
  port: Number(port),
  username: user,
  password: pass,
  database: db,
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/entities"
  },
  synchronize: false
} as ConnectionOptions;
