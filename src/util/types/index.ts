import { Router } from "express";

export interface ServerRoute {
  path: string;
  handler: Router;
}

export interface IUser {
  username: string;
  score: number;
  color: string;
}
