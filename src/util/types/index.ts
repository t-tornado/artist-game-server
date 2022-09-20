import { Router } from "express";

export interface ServerRoute {
  path: string;
  handler: Router;
}
