import { Request, Response } from "express";
import { GetAllDebtsUseCase } from "./GetAllDebtsUseCase";

export class GetAllDebtsController {
  async handle(req: Request, res: Response) {
    const { id_user } = req;

    try {
      const getAllDebtsUseCase = new GetAllDebtsUseCase();
      const debitos = await getAllDebtsUseCase.execute(id_user);

      return res.status(200).json(debitos);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
