import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

export class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { name, email, password, github_user } = req.body;

    try {
      const createUsersUseCase = new CreateUsersUseCase();
      const result = await createUsersUseCase.execute({
        name,
        email,
        password,
        github_user,
      });
  
      return res.status(201).json(result);      
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