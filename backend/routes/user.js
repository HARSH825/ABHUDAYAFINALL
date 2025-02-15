import {Router} from 'express';
const router = Router();
import sendOtp  from '../controllers/sendOtp.js';
import verifyOtp  from '../controllers/verifyOtp.js';
import setMPIN from '../controllers/setMPIN.js';
import loginUser from '../controllers/login.js';

router.post('/otp',sendOtp);
router.post('/verify',verifyOtp);
router.post('/mpin',setMPIN);    
router.post('/login',loginUser);
export default router;