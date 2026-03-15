import {Router} from "express";
import * as ProductController from "@controllers/product-controller.js";

const router = Router();

router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", ProductController.create);

export default router;
