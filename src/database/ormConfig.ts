import { ConnectionOptions } from "typeorm";

export default {
  name: "default",
  url: process.env.DATABASE_URL,
  type: "postgres",
  ssl: true,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR
  },
  synchronize: false
} as ConnectionOptions;
