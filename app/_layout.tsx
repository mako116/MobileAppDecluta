import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    HelveticaNeueLTPro: require('../assets/fonts/helvetica/HelveticaNeueLTProMd.otf'),
    HelveticaNeueLT: require('../assets/fonts/helvetica/HelveticaNeueLTProUltLt.otf'),  
    ProximaNova: require('../assets/fonts/proxima-nova/ProximaNova-RegularIt.ttf'),
    ProximaNovaSemi: require('../assets/fonts/proxima-nova/ProximaNova-SemiboldIt.ttf'),
    ProximaNovaBold: require('../assets/fonts/proxima-nova/ProximaNova-Bold.ttf'),
    PoppinsBold: require('../assets/fonts/poppins/Poppins-Bold.ttf'),
    Poppins: require('../assets/fonts/poppins/Poppins-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
       <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"   />
        <Stack.Screen name="(routes)/splashscren/index" />
        <Stack.Screen name="(routes)/login/index" />
        <Stack.Screen name="(routes)/SuccessModalScreen/index" />
        
       </Stack>
   );
}
