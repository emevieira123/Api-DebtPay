import { Request, Response } from "express";
import { CreateDebtUseCase } from "./CreateDebtUseCase";

export class CreateDebtController {
  async handle(req: Request, res: Response) {
    const {
      name_debt,
      produto,
    } = req.body;
    const { id_user } = req;
    const createDebtUseCase = new CreateDebtUseCase();

    const debt = await createDebtUseCase.execute({
      name_debt,
      produto,
      id_user,
    });

    return res.json(debt);
  }
}
