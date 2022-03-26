import { getCustomRepository } from "typeorm";
import { MemberRepositories } from "../repositories/MemberRepositories";

class DisableMemberService {
  async execute(id: string, active: boolean) {
    const memberRepository = getCustomRepository(MemberRepositories);
    const memberToDisable = await memberRepository.findOne(id);

    if (!memberToDisable) {
      throw new Error("Member not found");
    }

    await memberRepository.update(id, {
      active,
      updated_at: new Date()
    });
    const member = await memberRepository.findOne(id);

    return member;
  }
}

export { DisableMemberService };
