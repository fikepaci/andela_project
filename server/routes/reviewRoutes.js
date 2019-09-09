import { Router } from 'express';
import { createreview, deletereview } from '../controllers/reviewController';
import { isEmailUsed, isAdmin } from '../middleware/userMiddleware';
import verifyToken from '../middleware/tokenMiddleware';

const router = Router();

router.post('/sessions/:sessionId/review', verifyToken, isEmailUsed, createreview);

router.delete('/sessions/:sessionId/review', verifyToken, isAdmin, deletereview);

export default router;
