import { Router } from "express";

export interface AppRoute {
  path: string;
  handler: Router;
}

export interface IUser {
  username: string;
  score: number;
  color: string;
}
