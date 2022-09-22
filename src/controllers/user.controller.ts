import { Request, Response } from "express";
import { COLORS } from "../db";
import { UserService } from "../services/user.service";
import { getRandomBtnRange } from "../util/functions";

class UserControllerClass {
  async createUser(req: Request, res: Response) {
    let user = req.body;
    user.color = COLORS[getRandomBtnRange(COLORS.length)];
    try {
      console.log({ user });
      await UserService.createUser(user);
      res.send({ success: true });
    } catch (error: any) {
      console.log({ error });
      res.send({
        success: false,
        error: error.message,
      });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const data = await UserService.getUsers();
      res.send({ success: true, data });
    } catch (error: any) {
      res.send({ success: false, error });
    }
  }
}

export const UserController = new UserControllerClass();
