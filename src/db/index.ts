import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserModel } from "./models";
dotenv.config();

class DBClass {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  connectDb() {
    return new Promise((res, rej) => {
      try {
        mongoose.connect(this.url).then(() => {
          console.log("🛢 🛢 🛢 Successfully connected to Database 🛢 🛢 🛢");
          mongoose.connection.useDb("artist-game");
          res(true);
        });
      } catch (error: any) {
        rej("Failed to connect to mongo");
      }
    });
  }
}

const mongoUrl = process.env.MONGO_URL;
let Database: DBClass | undefined;

if (mongoUrl) {
  Database = new DBClass(mongoUrl);
}

// colorbank

const COLORS = [
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

export { Database, UserModel, COLORS };
