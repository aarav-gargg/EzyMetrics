import { Router } from 'express';
import { getCampaigns } from '../controllers/campaign.contoller.js';

const router = Router();

router.get('/marketing/campaigns', getCampaigns);

export default router;
