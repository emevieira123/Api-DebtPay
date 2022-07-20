import { prisma } from "../../../../database/prismaClient";

interface IUpdateStatusParcela {
  id_parcela: string;
  id_user: string;
  // status: boolean;
}

export class PutStatusParcelaUseCase {
  async execute({ id_parcela, id_user }: IUpdateStatusParcela) {
    const Parcela = await prisma.parcelas.findFirst({
      where: {
        id: id_parcela,
      }
    });

    if(!Parcela?.status) {
      const result = await prisma.parcelas.updateMany({
        where: {
          id: id_parcela,
          id_user,
        },
        data: {
          status: true,
        },
      });

      return result;

    } else {
      const result = await prisma.parcelas.updateMany({
        where: {
          id: id_parcela,
          id_user,
        },
        data: {
          status: false,
        },
      });

      return result;
    }

  }
}