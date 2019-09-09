import { Router } from 'express';
import verifyToken from '../middleware/token.middleware';
import {
  signin, signup, upgradetomentor, allmentors, specificmentor,
} from '../controllers/user.controller';
import validate from '../middleware/validation.middleware';
import {
  hashPassword, authanticate, isuser, isAdmin, isEmailUsed,
} from '../middleware/user.middleware';

const router = Router();

router.post('/auth/signup', validate, isEmailUsed, hashPassword, signup);

router.post('/auth/signin', validate, authanticate, signin);

router.patch('/user/:userId', verifyToken, isAdmin, upgradetomentor);

router.get('/mentors', verifyToken, isuser, allmentors);

router.get('/mentors/:mentorId', verifyToken, isuser, specificmentor);

export default router;
