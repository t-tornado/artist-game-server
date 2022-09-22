"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.COLORS = exports.UserModel = exports.Database = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var models_1 = require("./models");
exports.UserModel = models_1.UserModel;
dotenv_1["default"].config();
var DBClass = /** @class */ (function () {
    function DBClass(url) {
        this.url = url;
    }
    DBClass.prototype.connectDb = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            try {
                mongoose_1["default"].connect(_this.url).then(function () {
                    console.log("🛢 🛢 🛢 Successfully connected to Database 🛢 🛢 🛢");
                    mongoose_1["default"].connection.useDb("artist-game");
                    res(true);
                });
            }
            catch (error) {
                rej("Failed to connect to mongo");
            }
        });
    };
    return DBClass;
}());
var mongoUrl = process.env.MONGO_URL;
var Database;
exports.Database = Database;
if (mongoUrl) {
    exports.Database = Database = new DBClass(mongoUrl);
}
// colorbank
var COLORS = [
    "#182747",
    "#562B08",
    "#9C2C77",
    "#FD841F",
    "#4C0033",
    "#25316D",
    "#16213E",
    "#874C62",
    "#850E35",
    "#A62349",
];
exports.COLORS = COLORS;
