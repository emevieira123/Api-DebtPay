import 'dotenv/config';
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import { routes } from "./routes";
import "express-async-errors";
import cors from 'cors';

import swaggerDocs from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    })
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

app.listen(process.env.PORT || 4000, () => console.log('Server is running in port 4000!'));