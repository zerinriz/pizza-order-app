import express from "express";
import orderCtrl from "../controllers/order.controller";

const router = express.Router();

router.route("/api/orders").get(orderCtrl.listOrder).post(orderCtrl.create);

export default router;
