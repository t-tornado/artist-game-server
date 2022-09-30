import { BaseApplicationException } from "../core";

export class NameValidatorException extends BaseApplicationException {
  constructor(message: string) {
    super("NameValidatorException >" + message);
  }
}
