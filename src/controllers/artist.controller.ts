import { Request, Response } from "express";
import { AlbumsAPI } from "../services/album-api.service";

class ArtsitControllerClass {
  get3RandAlbums = async (req: Request, res: Response) => {
    const artistName = req.query.name as string;
    if (artistName) {
      const data = await AlbumsAPI.getArtistAlbums({ artiste: artistName });
      res.send({
        success: true,
        data,
      });
    } else {
      res.send({
        success: true,
        message: "No artiste name",
      });
    }
  };
}

export const ArtsitController = new ArtsitControllerClass();
