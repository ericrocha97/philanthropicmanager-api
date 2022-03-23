import { getCustomRepository } from "typeorm";
import { EntityPreferencesRepositories } from "../repositories/EntityPreferencesRepositories";

export async function GetCurrentAdministrationDate() {
  const entityPreferences = getCustomRepository(EntityPreferencesRepositories);

  const { administration } = await entityPreferences.findOne({
    where: {
      current: true
    }
  });

  const [semester, year] = administration.split("/");

  if (semester === "1") {
    const dateInt = `${year}-01-01`;
    const dateEnd = `${year}-06-30`;
    return { dateInt, dateEnd };
  } else {
    const dateInt = `${year}-07-01`;
    const dateEnd = `${year}-12-31`;
    return { dateInt, dateEnd };
  }
}
