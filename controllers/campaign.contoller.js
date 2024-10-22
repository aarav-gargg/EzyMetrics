import Campaign from '../models/campaign.models.js';


export const getCampaigns = async (req, res) => {
  const campaigns = [{ id: 101, name: "Campaign A", budget: 1000 }, { id: 102, name: "Campaign B", budget: 2000 }];
  res.json(campaigns);
};


export const storeCampaigns = async (campaigns) => {
  await Campaign.insertMany(campaigns);
};
