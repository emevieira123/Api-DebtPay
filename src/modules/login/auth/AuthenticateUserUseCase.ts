import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    // Verifica se o user está cadastrado
    const user = await prisma.users.findFirst({
      where: { email: email }
    });

    if(!user) {
      throw new Error("Não existe usuário com o email informado!");
    }

    // Verifica se a senha corresponde ao user
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("A senha informa é inválida!");
    }

    // Gera um token
    // const secret: any = process.env.TOKEN_SECRET_USER;
    const { id } = user;
    const accessToken = jwt.sign({id, email}, process.env.TOKEN_SECRET_USER || 'default', {
      subject: user.id,
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return {accessToken, user};
  }
}