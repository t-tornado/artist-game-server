import { Request, Response } from "express";
import { COLORS } from "../db";
import { UserService } from "./user.service";
import { getRandomBtnRange } from "../utils/functions";
import { BaseController } from "../core";

class UserControllerClass extends BaseController {
  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
  }
  async createUser(req: Request, res: Response) {
    const user = req.body;
    user.color = COLORS[getRandomBtnRange(COLORS.length)];
    try {
      await UserService.createUser(user);
      this.jsonResponse(res, 200, { success: true });
    } catch (error: any) {
      this.clientError(res, {
        success: false,
        error: error.message,
      });
    }
  }

  getUsers = async (_: Request, res: Response) => {
    try {
      const data = await UserService.getUsers();
      this.ok(res, data);
    } catch (error: any) {
      this.clientError(res, { success: false, error });
    }
  };
}

export const UserController = new UserControllerClass();
