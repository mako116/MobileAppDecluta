import React from 'react';
import { MenuSection } from './MenuSection';
import { MenuItem } from './MenuItem';

export const MyFinancesSection: React.FC = () => {
  return (
    <MenuSection title="My Finances">
      <MenuItem icon="wallet-outline" label="My Wallet" />
      <MenuItem icon="document-text-outline" label="Transactions History" />
    </MenuSection>
  );
};