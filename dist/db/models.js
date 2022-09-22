"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1["default"].Schema({
    score: { type: Number, required: true },
    username: { type: String, required: true, trim: true },
    color: { type: String, required: true }
});
var Database = mongoose_1["default"].connection.useDb("artists-game");
exports.UserModel = Database.model("user", UserSchema);
