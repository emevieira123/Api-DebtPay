import { Request, Response } from "express";
import { GetDebtAndParcelasUseCase } from "./GetDebtAndParcelasUseCase";


export class GetDebtAndParcelasController {
  async handle(req: Request, res: Response) {
    const { id: id_debt } = req.params;
    const { id_user } = req;

    const getDebtAndParcelasUseCase = new GetDebtAndParcelasUseCase();
    const [{ id, name_debt, produto, parcelas }] = await getDebtAndParcelasUseCase.execute(id_debt, id_user);

    return res.json({ id, name_debt, produto, parcelas });
  }
}