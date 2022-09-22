"use strict";
exports.__esModule = true;
exports.ArtistGameRoutes = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var user_controller_1 = require("./controllers/user.controller");
/**
 * ARTIST ROUTER
 */
var ArtistRouter = (0, express_1.Router)();
ArtistRouter.get("/getRandomAlbums", controllers_1.ArtsitController.get3RandAlbums);
var ArtistRoutes = {
    path: "/api/artist",
    handler: ArtistRouter
};
/**
 * USER ROUTER
 */
var UserRouter = (0, express_1.Router)();
UserRouter.post("/", user_controller_1.UserController.createUser);
UserRouter.get("/all", user_controller_1.UserController.getUsers);
var UserRoutes = { path: "/api/user", handler: UserRouter };
exports.ArtistGameRoutes = [ArtistRoutes, UserRoutes];
