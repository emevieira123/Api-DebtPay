import { prisma } from "../../../../database/prismaClient";



export class GetAllDebtsAndParcelasUsecase {
  async execute(id_user: string) {
    const debtAndParcelas = await prisma.debt.findMany({
      orderBy:[
        {
          created_at: 'desc',
        }
      ],
      where: { 
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
      },
    });

    return debtAndParcelas;
  }
}