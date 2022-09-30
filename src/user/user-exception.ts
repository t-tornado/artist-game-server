import { BaseApplicationException } from "../core";

export class UserException extends BaseApplicationException {
  constructor(message: string) {
    super("User Exception >" + message);
  }
}
