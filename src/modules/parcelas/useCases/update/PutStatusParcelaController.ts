import { Request, Response } from "express";
import { PutStatusParcelaUseCase } from "./PutStatusParcelaUseCase";


export class PutStatusParcelaController {
  async handle(req: Request, res: Response) {
    const { id_user } = req;
    const { id: id_parcela } = req.params;
    const { status } = req.body;

    
    try {
      const updateStatusParcelaUseCase = new PutStatusParcelaUseCase();
      const parcela = await updateStatusParcelaUseCase.execute({
        id_parcela,
        id_user,
        status,
      });
  
      return res.status(200).json(parcela);
      
    } catch (error) {
      return res.status(500)
    }
  }
}