import axios from 'axios';
import { storeLeads } from '../controllers/leads.contoller.js';
import { storeCampaigns } from '../controllers/campaign.contoller.js';

export const fetchAndStoreLeads = async () => {
  const response = await axios.get('http://dummy-api/leads');
  const leads = response.data;
  await storeLeads(leads);
};

export const fetchAndStoreCampaigns = async () => {
  const response = await axios.get('http://dummy-api/campaigns');
  const campaigns = response.data;
  await storeCampaigns(campaigns);
};
