import { Router } from 'express';
const router = Router();


// Health Check
router.get(
  '/healthcheck',
  async (req, res) => res.status(200).json({ message: 'Success' }),
);


export { router };
