import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";
import photoController from "../controllers/PhotoController";

const router = Router();

router.post("/", loginRequired, photoController.store);

export default router;
