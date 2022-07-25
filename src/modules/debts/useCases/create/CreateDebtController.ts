import { Request, Response } from "express";
import { CreateDebtUseCase } from "./CreateDebtUseCase";

export class CreateDebtController {
  async handle(req: Request, res: Response) {
    const {
      name_debt,
      produto,
    } = req.body;
    const { id_user } = req;
try {
  const createDebtUseCase = new CreateDebtUseCase();
  const debt = await createDebtUseCase.execute({
    name_debt,
    produto,
    id_user,
  });
  return res.status(200).json(debt);
} catch (error) {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }
  return res.status(500).json({ error: 'Internal server error' });
}

    
  }
}
