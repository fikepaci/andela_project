import { Router } from 'express';
import verifyToken from '../middleware/tokenMiddleware';
import { ismentor, isuser } from '../middleware/userMiddleware';
import {
  createsession, acceptsession, rejectsession, allsessionsrequest,
} from '../controllers/sessionController';

const router = Router();

router.post('/sessions', verifyToken, createsession);

router.patch('/sessions/:sessionId/accept', verifyToken, ismentor, acceptsession);

router.patch('/sessions/:sessionId/reject', verifyToken, ismentor, rejectsession);

router.get('/sessions', verifyToken, isuser, allsessionsrequest);


export default router;
