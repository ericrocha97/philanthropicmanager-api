import { ConnectionOptions } from "typeorm";

export default {
  name: "default",
  url: process.env.DATABASE_URL,
  type: "postgres",
  ssl: process.env.NODE_ENV === "production" ? true : false,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR
  },
  synchronize: false,
  extra:
    process.env.NODE_ENV === "production"
      ? {
          ssl: {
            rejectUnauthorized: false
          }
        }
      : {}
} as ConnectionOptions;
