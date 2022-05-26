import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Member } from "../entities/Member";
import { User } from "../entities/User";

interface IAuthenticateRequest {
  username: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ username, password }: IAuthenticateRequest) {
    const userRepositories = getRepository(User);
    const memberRepositories = getRepository(Member);

    const user = await userRepositories.findOne({
      username
    });

    if (!user) {
      throw new Error("Username or password is wrong");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username or password is wrong");
    }
    const member = await memberRepositories.findOne({
      id: user.memberId
    });
    const memberToToken = {
      id: member.id,
      CID: member.CID,
      name: member.name,
      level: member.level,
      active: member.active
    };

    const token = sign(
      {
        username: user.username,
        member: memberToToken
      },
      process.env.JWT_KEY as string,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
