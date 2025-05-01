import express from 'express';
import { createUser } from '../controller/usercontroller.js';

const userRouter = express.Router();
userRouter.post('/', createUser);

export default userRouter;