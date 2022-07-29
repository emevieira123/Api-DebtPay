import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUsers {
  name: string;
  email: string;
  password: string;
  github_user: string;
}

export class CreateUsersUseCase {
  async execute({ name, email, password, github_user}: ICreateUsers) {
    // Valida se o email já existe
    const emailExist = await prisma.users.findFirst({
      where: { 
        email: {
          equals: email,
        },
      }
    });

    if(!name || !email || !password) {
      throw new Error('Erro: todos os campos devem ser preenchidos!');
    }
    
    if(emailExist) {
      throw new Error(`O E-mail já está cadastrado`);
    }


    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar usuário
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
        github_user,
      }
    });

    return user;
  }
}