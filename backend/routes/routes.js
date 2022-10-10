import express from 'express';
import { getAllUser, register } from '../controllers/user-controller';

const router = express.Router();

router.get('/', getAllUser);
router.post("/register", register)
export default router;