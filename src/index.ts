import { ArtistRoutes } from "./artiste";
import { UserRoutes } from "./user";
import { Server } from "./app";
import { Database } from "./db";

const ArtistGameServer = new Server([...UserRoutes, ...ArtistRoutes]);
ArtistGameServer.start();
if (Database) {
  (async () => {
    await Database.connectDb();
  })();
}
