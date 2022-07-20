import { prisma } from "../../../../database/prismaClient";

interface ICreateDebt {
  name_debt: string;
  produto: string;
  id_user: string;
}

export class CreateDebtUseCase {
  async execute({
    name_debt,
    produto,
    id_user
  }: ICreateDebt) {
    // Salvar debito
    const debt = await prisma.debt.create({
      data: {
        name_debt,
        produto,
        id_user
      }
      
    });

    return debt;
  }
}