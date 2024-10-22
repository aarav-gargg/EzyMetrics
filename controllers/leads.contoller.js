import Lead from '../models/leads.models.js';

export const getLeads = async (req, res) => {
  const leads = [{ id: 1, name: "Lead 1", status: "new" }, { id: 2, name: "Lead 2", status: "contacted" }];
  res.json(leads);
};

export const storeLeads = async (leads) => {
  await Lead.insertMany(leads);
};
