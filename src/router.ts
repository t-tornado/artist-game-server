import { Router } from "express";
import { ArtsitController } from "./controllers";
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
// UserRouter.get("/")
const UserRoutes: ServerRoute = { path: "/api/users", handler: UserRouter };

export const ArtistGameRoutes = [ArtistRoutes, UserRoutes];
