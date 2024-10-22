import { Router } from 'express';
import { getLeads } from '../controllers/leads.contoller.js';

const router = Router();

router.get('/crm/leads', getLeads);

export default router;
