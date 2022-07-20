import { prisma } from "../../../../database/prismaClient";

interface ICreateParcela {
  valor_parcela: number;
  dia_vencimento: number;
  qtde_parcelas: number;
  status: boolean;
  id_user: string;
  id_debt: string;
}

export class CreateParcelasUseCase {
  async execute({
    valor_parcela,
    dia_vencimento,
    qtde_parcelas,
    status,
    id_user,
    id_debt,
  }: ICreateParcela) {
    // Validação se a divida perntence ao usuário que está cadastrando
    const DebtPertenceUser = await prisma.debt.findFirst({
      where: {
        id: id_debt,
      }
    });

    if(DebtPertenceUser?.id_user !== id_user) {
      throw new Error(`Essa dívida não pertence ao seu usuário`);
    }

    //Salva no banco
    const parcela = await prisma.parcelas.create({
      data: {
        valor_parcela,
        dia_vencimento,
        qtde_parcelas,
        status,
        id_user,
        id_debt,
      },
    });

    return parcela;
  }
}
