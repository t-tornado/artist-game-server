import { BaseController } from "../core";
import { Request, Response } from "express";
import { ITunesApi } from "./itunes-api";

class ArtisteControllerClass extends BaseController {
  get3RandAlbums = async (req: Request, res: Response) => {
    try {
      const artiste = req.query.name as string;
      const data = await ITunesApi.getArtistAlbums({ artiste });
      this.ok(res, data);
    } catch (error: any) {
      this.clientError(res, { message: error.message });
    }
  };
}

export const ArtisteController = new ArtisteControllerClass();
