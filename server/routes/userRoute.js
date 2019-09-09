import { Router } from 'express';
import verifyToken from '../middleware/tokenMiddleware';
import {
  signin, signup, upgradetomentor, allmentors, specificmentor,
} from '../controllers/userController';
import validate from '../middleware/validationMiddleware';
import {
  hashPassword, authanticate, isuser, isAdmin, isEmailUsed,
} from '../middleware/userMiddleware';

const router = Router();

router.post('/auth/signup', validate, isEmailUsed, hashPassword, signup);

router.post('/auth/signin', validate, authanticate, signin);

router.patch('/user/:userId', verifyToken, isAdmin, upgradetomentor);

router.get('/mentors', verifyToken, isuser, allmentors);

router.get('/mentors/:mentorId', verifyToken, isuser, specificmentor);

export default router;
