import React from 'react';
import { MenuSection } from './MenuSection';
import { MenuItem } from './MenuItem';

export const ImproveSection: React.FC = () => {
  return (
    <MenuSection title="Improve DeckutaKing">
      <MenuItem icon="star-outline" label="Rate Us" />
      <MenuItem icon="chatbox-outline" label="Feedback" />
    </MenuSection>
  );
};