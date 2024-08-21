import { Router } from "express";
import { search } from "../controllers/searchController";

const router = Router();

router.get("/", search);

export default router;
