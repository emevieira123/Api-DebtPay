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
    //Valida se foi enviado dados do frontend
    if (name_debt === '' || produto === '') {
      throw new Error('Erro: Todos os campos devem ser preenchidos!!!')
    }

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