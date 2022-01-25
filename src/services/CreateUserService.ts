import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import { Member } from "../entities/Member";
import { User } from "../entities/User";

interface IUserRequest {
  username: string;
  password: string;
  memberId: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ username, password, memberId, admin }: IUserRequest) {
    const userRepository = getRepository(User);
    const memberRepository = getRepository(Member);

    if (!username || !password || !memberId) {
      throw new Error("Fill all fields");
    }

    const userAlreadyExists = await userRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const memberExists = await memberRepository.findOne({
      id: memberId,
    });

    if (!memberExists) {
      throw new Error("Member not found");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      username,
      password: passwordHash,
      memberId,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
