import { prisma } from "../../../../database/prismaClient";


export class GetUserUseCase {
  async execute(id: string) {
    const user = await prisma.users.findMany({
      where: {
        id,
      }
    });
    return user;
  }
}