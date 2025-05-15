import React from 'react';
import { MenuSection } from './MenuSection';
import { MenuItem } from './MenuItem';

export const MyCenterSection: React.FC = () => {
  return (
    <MenuSection title="My Center">
      <MenuItem icon="cube-outline" label="My Items" route="/(routes)/Account/MyItem"  />
      <MenuItem icon="cart-outline" label="My Orders" badgeCount={1} route="/my-orders" />
      <MenuItem icon="chatbubble-outline" label="My Messages" badgeCount={1} route="/my-messages" />
      <MenuItem icon="location-outline" label="My Pickups" route="/my-pickups" />
      <MenuItem icon="close-circle-outline" label="Cancellation Requests" badgeCount={2} route="/cancellation-requests" />
      <MenuItem icon="bookmark-outline" label="Saved Items" route="/saved-items" />
      <MenuItem icon="shield-checkmark-outline" label="Resolution Center" route="/resolution-center" />
      <MenuItem icon="notifications-outline" label="Notifications" route="/notifications" />
      <MenuItem icon="settings-outline" label="Account Settings" route="/account-settings" />
    </MenuSection>
  );
};