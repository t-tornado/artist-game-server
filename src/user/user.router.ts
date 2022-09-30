import { Router } from "express";
import { AppRoute } from "../utils";
import { UserController } from "./user.controller";

const UserRouter = Router();
UserRouter.post("/", UserController.createUser);
UserRouter.get("/all", UserController.getUsers);
const UserRoutes: AppRoute[] = [{ path: "/api/user", handler: UserRouter }];

export { UserRoutes };
