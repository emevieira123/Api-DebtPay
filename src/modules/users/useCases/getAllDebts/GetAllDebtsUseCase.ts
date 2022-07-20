import { prisma } from "../../../../database/prismaClient"

export class GetAllDebtsUseCase {
  async execute(id_user: string) {
    const debitos = await prisma.users.findMany({
      where: {
        id: id_user,
      },
      select: {
        id: true,
        name: true,
        email: true,
        debt: true,
      }
    });

    return debitos;
  }
}