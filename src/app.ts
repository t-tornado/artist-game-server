import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppRoute } from "./utils";

dotenv.config();

export class Server {
  private server: Express;
  private serverRoutes: AppRoute[];

  constructor(routes: AppRoute[]) {
    this.server = express();
    this.serverRoutes = routes;
  }

  private async initServer() {
    this.server.use(express.json());
    this.server.use(cors()); // handle cors errors
    this.createRoutes(this.serverRoutes);
  }

  private createRoutes(routes: AppRoute[]) {
    routes.forEach((route) => {
      this.server.use(route.path, route.handler);
    });
  }

  async start() {
    //
    const port = process.env.PORT;
    this.initServer();
    this.server.listen(port, () => {
      console.log(
        `🚀🚀 Artist Game Backend Server Running on --${port}--- 🚀🚀`
      );
    });
  }
}
