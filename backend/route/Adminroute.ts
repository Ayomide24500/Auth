import { Router } from "express";
import {
  VerifyAdmin,
  createAdmin,
  getAdmin,
  getOneAdmin,
  signInAdmin,
  updateOneAdmin,
} from "../controller/Admincontroller";

const router: Router = Router();

router.route("/sign-up-admin").post(createAdmin);
router.route("/read-Admin").get(getAdmin);
router.route("/sign-in-Admin").post(signInAdmin);
router.route("/read-Admin/:AdminID").get(getOneAdmin);
router.route("/verify-Admin").patch(VerifyAdmin);
router.route("/update-Admin/:AdminID").patch(updateOneAdmin);

export default router;
