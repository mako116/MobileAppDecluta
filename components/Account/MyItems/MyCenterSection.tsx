import React from 'react';
import { MenuSection } from './MenuSection';
import { MenuItem } from './MenuItem';

export const MyCenterSection: React.FC = () => {
  return (
    <MenuSection title="My Center">
      <MenuItem icon="cube-outline" label="My Items" />
      <MenuItem icon="cart-outline" label="My Orders" badgeCount={1} />
      <MenuItem icon="chatbubble-outline" label="My Messages" badgeCount={1} />
      <MenuItem icon="location-outline" label="My Pickups" />
      <MenuItem icon="close-circle-outline" label="Cancellation Requests" badgeCount={2} />
      <MenuItem icon="bookmark-outline" label="Saved Items" />
      <MenuItem icon="shield-checkmark-outline" label="Resolution Center" />
      <MenuItem icon="notifications-outline" label="Notifications" />
      <MenuItem icon="settings-outline" label="Account Settings" />
    </MenuSection>
  );
};