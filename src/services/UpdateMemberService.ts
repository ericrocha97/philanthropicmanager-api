import { getCustomRepository } from "typeorm";
import { MemberRepositories } from "../repositories/MemberRepositories";

interface IMemberRequest {
  id: string;
  name?: string;
  CID?: string;
  address?: string;
  CEP?: string;
  phone?: string;
  birthday?: Date;
  level?: number;
}

class UpdateMemberService {
  async execute({
    id,
    name,
    CID,
    address,
    CEP,
    phone,
    birthday,
    level
  }: IMemberRequest) {
    const memberRepository = getCustomRepository(MemberRepositories);
    const memberToUpdate = await memberRepository.findOne(id);

    if (!memberToUpdate) {
      throw new Error("Member not found");
    }

    if (!memberToUpdate.active) {
      throw new Error("Member is not active");
    }

    await memberRepository.update(id, {
      name: name || memberToUpdate.name,
      CID: CID || memberToUpdate.CID,
      address: address || memberToUpdate.address,
      CEP: CEP || memberToUpdate.CEP,
      phone: phone || memberToUpdate.phone,
      birthday: birthday || memberToUpdate.birthday,
      level: level || memberToUpdate.level,
      updated_at: new Date()
    });
    const member = await memberRepository.findOne(id);

    return member;
  }
}

export { UpdateMemberService };
