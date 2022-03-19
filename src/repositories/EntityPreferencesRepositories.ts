import { EntityRepository, Repository } from "typeorm";
import { EntityPreferences } from "../entities/EntityPreferences";

@EntityRepository(EntityPreferences)
class EntityPreferencesRepositories extends Repository<EntityPreferences> {}

export { EntityPreferencesRepositories };
