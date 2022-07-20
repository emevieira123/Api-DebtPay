import { Request, Response } from "express";
import { GetAllDebtsAndParcelasUsecase } from "./GetAllDebtsAndParcelasUseCase";


export class GetAllDebtsAndParcelasController {
  async handle(req: Request, res: Response) {
    const { id_user } = req;

    const getAllDebtsAndParcelasUsecase = new GetAllDebtsAndParcelasUsecase();
    const debtAndParcelas = await getAllDebtsAndParcelasUsecase.execute(id_user);

    return res.json(debtAndParcelas);
  }
}