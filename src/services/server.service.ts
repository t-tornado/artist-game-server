import express, { Express } from "express";
import cors from "cors";
import { ServerRoute } from "../util/types";
import dotenv from "dotenv";

dotenv.config();

export class Server {
  private server: Express;
  private serverRoutes: ServerRoute[];
  constructor(routes: ServerRoute[]) {
    this.server = express();
    this.serverRoutes = routes;
  }

  private async initServer() {
    try {
      this.server.use(express.json());
      this.server.use(cors()); // handle cors errors
      await this.createRoutes(this.serverRoutes);
    } catch (error: any) {
      console.log("Failed to catch errors  ", error.message);
    }
  }

  private createRoutes(routes: ServerRoute[]) {
    routes.forEach((route) => {
      this.server.use(route.path, route.handler);
    });
  }

  async start() {
    //
    const port = process.env.PORT;
    await this.initServer();
    this.server.listen(port, () => {
      console.log(
        `🚀🚀 Artist Game Backend Server Running on --${port}--- 🚀🚀`
      );
    });
  }
}
