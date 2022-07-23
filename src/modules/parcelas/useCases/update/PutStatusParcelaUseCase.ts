import { prisma } from "../../../../database/prismaClient";

interface IUpdateStatusParcela {
  id_parcela: string;
  id_user: string;
  status: boolean;
}

export class PutStatusParcelaUseCase {
  async execute({ id_parcela, id_user, status }: IUpdateStatusParcela) {
    const result = await prisma.parcelas.updateMany({
      where: {
        id: id_parcela,
      },
      data: {
        status,
        id_user,
      },
    });

    return result;
  }
}