import { Response } from "express";

abstract class BaseController {
  jsonResponse(res: Response, code, message: any) {
    return res.status(code).json({ message });
  }

  ok(res: Response, data: any) {
    if (data) {
      res.type("application/json");
      return res.status(200).json(data);
    }
    return res.sendStatus(200);
  }

  created(res: Response) {
    return res.sendStatus(201);
  }

  clientError(res: Response, message: any) {
    return this.jsonResponse(res, 400, message || "Unauthorized");
  }

  unauthorized(res: Response, message: any) {
    return this.jsonResponse(res, 401, message || "Unauthorized");
  }

  notFound(res: Response, message: any) {
    return this.jsonResponse(res, 404, message || "Not found");
  }
}

export { BaseController };
