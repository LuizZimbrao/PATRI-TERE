import { Router } from "express";
import UsersController from "./controllers/UsersController";

const router = Router();

router.post("/create", UsersController.store);
router.post("/authenticate", UsersController.login);

export default router;
