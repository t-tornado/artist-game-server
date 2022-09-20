import { ArtistGameRoutes } from "./router";
import { Server } from "./services";

const ArtistGameServer = new Server(ArtistGameRoutes);
ArtistGameServer.start();
