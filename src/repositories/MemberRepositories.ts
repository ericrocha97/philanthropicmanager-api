import { EntityRepository, Repository } from "typeorm";
import { Member } from "../entities/Member";

@EntityRepository(Member)
class MemberRepositories extends Repository<Member> {}

export { MemberRepositories };
