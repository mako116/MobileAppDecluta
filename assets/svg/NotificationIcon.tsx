import React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotificationIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path 
            d="M10 5.36719V8.14219" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
        />
      <Path
        d="M10.0166 1.66602C6.94992 1.66602 4.46658 4.14935 4.46658 7.21602V8.96602C4.46658 9.53268 4.23325 10.3827 3.94158 10.866L2.88325 12.6327C2.23325 13.7243 2.68325 14.941 3.88325 15.341C7.86658 16.666 12.1749 16.666 16.1582 15.341C17.2832 14.966 17.7666 13.6493 17.1582 12.6327L16.0999 10.866C15.8082 10.3827 15.5749 9.52435 15.5749 8.96602V7.21602C15.5666 4.16602 13.0666 1.66602 10.0166 1.66602Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
      />
      <Path
        d="M12.7751 15.6836C12.7751 17.2086 11.5251 18.4586 10.0001 18.4586C9.24176 18.4586 8.54176 18.1419 8.04176 17.6419C7.54176 17.1419 7.2251 16.4419 7.2251 15.6836" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10"
      />
    </Svg>
  );
};

export default NotificationIcon;
