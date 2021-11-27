import express from "express";
import addressCtrl from "../controllers/address.controller";

const router = express.Router();
router
  .route("/address")
  .get(addressCtrl.listAddress)
  .post(addressCtrl.createAddress);

export default router;
