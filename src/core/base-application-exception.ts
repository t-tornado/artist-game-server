export class BaseApplicationException extends Error {
  constructor(message: string) {
    super("ArtisteZilla 😠 " + message);
  }
}
