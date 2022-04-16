import "reflect-metadata";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      response.status(400).json({
        status: "error",
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error"
    });
  }
);

app.listen(process.env.PORT || 3333, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 3333} at ${
      process.env.NODE_ENV
    }`
  );
});
