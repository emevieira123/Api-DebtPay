import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";


export class GetUserController {
  async handle(req: Request, res: Response) {
    const {id: idUser} = req.params;

    const getUserUseCase = new GetUserUseCase();
    const [{ id, name, email }] = await getUserUseCase.execute(idUser);

    return res.status(200).json({ id, name, email });
  }
}