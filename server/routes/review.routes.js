import { Router } from 'express';
import { createreview, deletereview } from '../controllers/review.controller';
import { isEmailUsed, isAdmin } from '../middleware/user.middleware';
import verifyToken from '../middleware/token.middleware';

const router = Router();

router.post('/sessions/:sessionId/review', verifyToken, isEmailUsed, createreview);

router.delete('/sessions/:sessionId/review', verifyToken, isAdmin, deletereview);

export default router;
