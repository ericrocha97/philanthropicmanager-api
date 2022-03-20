import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface IAuthenticateRequest {
  username: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ username, password }: IAuthenticateRequest) {
    const userRepositories = getRepository(User);

    const user = await userRepositories.findOne({
      username,
    });

    if (!user) {
      throw new Error('Username or password is wrong');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Username or password is wrong');
    }

    const token = sign(
      {
        username: user.username,
        member: user.member,
      },
      process.env.JWT_KEY as string,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}

export { AuthenticateUserService };
