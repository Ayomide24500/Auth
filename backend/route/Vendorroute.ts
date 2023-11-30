import { Router } from "express";
import {
  createVendor,
  signInVendor,
  verifyVendor,
} from "../controller/Vendorconroller";

const router: Router = Router();

router.route("/create-vendor").post(createVendor);
router.route("/sign-in-vendor").post(signInVendor);
router.route("/sign-in-vendor").post(verifyVendor);

export default router;
