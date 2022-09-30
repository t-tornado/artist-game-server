import { Router } from "express";
import { AppRoute } from "../utils";
import { ArtistNameValidatorMiddleware } from "./artist-name-validator-middleware";
import { ArtisteController } from "./artiste.controller";

const ArtistRouter = Router();
ArtistRouter.get(
  "/getRandomAlbums",
  ArtistNameValidatorMiddleware,
  ArtisteController.get3RandAlbums
);
const ArtistRoutes: AppRoute[] = [
  {
    path: "/api/artist",
    handler: ArtistRouter,
  },
];

export { ArtistRoutes };
