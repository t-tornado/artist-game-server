import { Router } from "express";
import { ArtsitController } from "./controllers";
import { UserController } from "./controllers/user.controller";
import { ServerRoute } from "./util/types";

/**
 * ARTIST ROUTER
 */
const ArtistRouter = Router();
ArtistRouter.get("/getRandomAlbums", ArtsitController.get3RandAlbums);
const ArtistRoutes: ServerRoute = {
  path: "/api/artist",
  handler: ArtistRouter,
};

/**
 * USER ROUTER
 */
const UserRouter = Router();
UserRouter.post("/", UserController.createUser);
UserRouter.get("/all", UserController.getUsers);
const UserRoutes: ServerRoute = { path: "/api/user", handler: UserRouter };

export const ArtistGameRoutes = [ArtistRoutes, UserRoutes];
