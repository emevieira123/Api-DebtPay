import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const authenticateUserUseCase = new AuthenticateUserUseCase();
    const result = await authenticateUserUseCase.execute({
      email,
      password
    });

    return res.json(result);
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