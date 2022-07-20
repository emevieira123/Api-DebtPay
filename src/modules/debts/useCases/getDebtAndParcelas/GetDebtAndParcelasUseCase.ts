import { prisma } from "../../../../database/prismaClient";


export class GetDebtAndParcelasUseCase {
  async execute(id_debt: string, id_user: string) {
    const debtAndParcelas = await prisma.debt.findMany({
      where: { 
        id: id_debt,
        id_user,
      },
      select: {
        id: true,
        name_debt: true,
        produto: true,
        id_user: true,
        parcelas: {
          select: {
            id: true,
            valor_parcela: true,
            dia_vencimento: true,
            qtde_parcelas: true,
            status: true,
          }
        },
      }
    });

    return debtAndParcelas;
  }
}