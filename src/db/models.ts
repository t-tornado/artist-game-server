import mongoose from "mongoose";
import { IUser } from "../util/types";

const UserSchema = new mongoose.Schema<IUser>({
  score: { type: Number, required: true },
  username: { type: String, required: true, trim: true },
  color: { type: String, required: true },
});
const Database = mongoose.connection.useDb("artists-game");
export const UserModel = Database.model("user", UserSchema);
