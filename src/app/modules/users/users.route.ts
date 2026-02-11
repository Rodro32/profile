import express from 'express';
import { UserControllers } from './users.controller';

const router = express.Router();

router.post('/create-admin',UserControllers.createAdmin);
// router.post('/create-vendor', UserControllers.createVendor);

export const UserRoute = router;
