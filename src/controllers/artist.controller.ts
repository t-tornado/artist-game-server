import { Request, Response } from "express";

class ArtsitControllerClass {
  get3RandAlbums = (req: Request, res: Response) => {
    const artistName = req.query.name;
    res.send({
      success: true,
      artistName,
    });
  };
}

export const ArtsitController = new ArtsitControllerClass();
