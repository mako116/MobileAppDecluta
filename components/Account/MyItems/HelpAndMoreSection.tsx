import React from 'react';
import { MenuSection } from './MenuSection';
import { MenuItem } from './MenuItem';

export const HelpAndMoreSection: React.FC = () => {
  return (
    <MenuSection title="Help & More">
      <MenuItem icon="people-outline" label="My Referrals" />
      <MenuItem icon="gift-outline" label="Rewards & Offers" />
      <MenuItem icon="help-circle-outline" label="Help Center" />
    </MenuSection>
  );
};
