import { Application, Request, Response } from "express";
import user from "./route/userRoute";
import admin from "./route/Adminroute";
import vendor from "./route/Vendorroute";
export const mainApp = (app: Application) => {
  app.use("/api/v1", user);
  app.use("/api/v1", admin);
  app.use("/api/v1", vendor);
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to the our Bank API",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
