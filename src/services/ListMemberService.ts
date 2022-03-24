import { getCustomRepository } from "typeorm";
import { MemberRepositories } from "../repositories/MemberRepositories";

class ListMemberService {
  async execute() {
    const memberRepository = getCustomRepository(MemberRepositories);
    const members = await memberRepository.find({
      where: {
        active: true
      }
    });
    return members;
  }
}

export { ListMemberService };
