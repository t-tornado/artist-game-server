import { NameValidatorException } from "../artiste/name-validator-exception";
import { Request, Response } from "express";

function QueryParameterValidater(param: string) {
  return function (req: Request, res: Response, next: Function) {
    if (req.query[param]) next();
    else {
      next(
        new NameValidatorException(`Parameter [${param}] not found on request`)
      );
    }
  };
}

export { QueryParameterValidater };
