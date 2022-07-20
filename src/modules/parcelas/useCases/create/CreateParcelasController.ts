import { Request, Response } from "express";
import { CreateParcelasUseCase } from "./CreateParcelasUseCase";

export class CreateParcelasController {
  async handle(req: Request, res: Response) {
    const {
      valor_parcela,
      dia_vencimento,
      qtde_parcelas,
      id_debt,
      // status,
    } = req.body;
    const { id_user } = req;

    try {
      const createParcelasUseCase = new CreateParcelasUseCase();
  
        const parcela = await createParcelasUseCase.execute({
          valor_parcela,
          dia_vencimento,
          qtde_parcelas,
          status: false,
          id_user,
          id_debt,
        });
    
        return res.status(201).json(parcela);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({
          error: error.message,
        });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }

  }
}
