// app/(admin)/admin/marketing/page.tsx
'use client';

import React, { useState } from 'react';
import EmailCampaignTab from '../../../components/marketing/EmailCampaignTab';
import LeadCampaignTab from '../../../components/marketing/LeadCampaignTab';
import SponsorCampaignTab from '../../../components/marketing/SponsorCampaignTab';
import AutoLeadScanTab from '../../../components/marketing/AutoLeadScanTab';

const tabs = ['Email Campaign', 'Lead Campaign', 'Sponsor Campaign', 'Auto Lead Scan'];

export default function MarketingMgmtPage() {
  const [activeTab, setActiveTab] = useState('Email Campaign');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Marketing Management</h1>

      <div className="flex gap-4 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'Email Campaign' && <EmailCampaignTab />}
        {activeTab === 'Lead Campaign' && <LeadCampaignTab />}
        {activeTab === 'Sponsor Campaign' && <SponsorCampaignTab />}
        {activeTab === 'Auto Lead Scan' && <AutoLeadScanTab />}
      </div>
    </div>
  );
}
