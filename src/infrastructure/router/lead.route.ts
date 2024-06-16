import { Router } from "express";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
import { logMiddleware } from "../middleware/log";
const router: Router = Router();

/**
 * http://localhost/lead POST
 */
const leadCtrl: LeadCtrl = container.get("lead.ctrl");
router.post("/", logMiddleware, leadCtrl.sendCtrl);

export { router };