import { getCustomRepository, getRepository } from "typeorm";
import { Member } from "../entities/Member";
import { EntityPreferencesRepositories } from "../repositories/EntityPreferencesRepositories";

interface IEntityPreferencesRequest {
  administration: string;
  leader1: string;
  leader2: string;
  leader3: string;
  treasurer: string;
  clerk: string;
  president_work: string;
  president_philanthropy: string;
}

class CreateEntityPreferencesService {
  async execute({
    administration,
    leader1,
    leader2,
    leader3,
    treasurer,
    clerk,
    president_work,
    president_philanthropy,
  }: IEntityPreferencesRequest) {
    const entityPreferencesRepository = getCustomRepository(
      EntityPreferencesRepositories
    );

    if (
      !administration ||
      !leader1 ||
      !leader2 ||
      !leader3 ||
      !treasurer ||
      !clerk ||
      !president_work ||
      !president_philanthropy
    ) {
      throw new Error("Fill all fields");
    }

    const regexValidatorAdminstration = new RegExp(`^[1-2]/\[0-9]{4}$`);
    if (!regexValidatorAdminstration.test(administration)) {
      throw new Error("Invalid administration");
    }

    const administrationAlreadyExists =
      await entityPreferencesRepository.findOne({
        administration,
      });

    if (administrationAlreadyExists) {
      //throw new Error("Administration already exists");
      console.log("Administration already exists");
      //deve liberar o update dos demais campos
    }

    const entityPreferencesAlreadyExists =
      await entityPreferencesRepository.findOne({
        administration,
        leader1,
        leader2,
        leader3,
        treasurer,
        clerk,
        president_work,
        president_philanthropy,
      });

    if (entityPreferencesAlreadyExists) {
      //throw new Error("Entity Preferences already exists");
      console.log("Entity Preferences already exists");
      //nao deve fazer nada, pois o usuário não alterou nenhuma informação
    }

    /**
     * validação de membros
     */

    const leader1Member = await this.verifyMemberIsValid(leader1, "leader1");
    const leader2Member = await this.verifyMemberIsValid(leader2, "leader2");
    const leader3Member = await this.verifyMemberIsValid(leader3, "leader3");
    const treasurerMember = await this.verifyMemberIsValid(
      treasurer,
      "treasurer"
    );
    const clerkMember = await this.verifyMemberIsValid(clerk, "clerk");
    const presidentWorkMember = await this.verifyMemberIsValid(
      president_work,
      "president_work"
    );
    const presidentPhilanthropyMember = await this.verifyMemberIsValid(
      president_philanthropy,
      "president_philanthropy"
    );

    const entityPreferences = entityPreferencesRepository.create({
      administration,
      leader1: leader1Member.id,
      leader2: leader2Member.id,
      leader3: leader3Member.id,
      treasurer: treasurerMember.id,
      clerk: clerkMember.id,
      president_work: presidentWorkMember.id,
      president_philanthropy: presidentPhilanthropyMember.id,
    });

    await entityPreferencesRepository.save(entityPreferences);

    return entityPreferences;
  }

  async verifyMemberIsValid(memberId: string, role: string) {
    const memberRepository = getRepository(Member);

    const member = await memberRepository.findOne({
      id: memberId,
    });

    if (!member) {
      throw new Error(`Member not found for role ${role}`);
    }

    return member;
  }
}

export { CreateEntityPreferencesService };
