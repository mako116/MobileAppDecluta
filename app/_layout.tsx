import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '@/context/AuthContext';
import AuthGuard from '@/components/Auth/AuthGuard';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </GestureHandlerRootView>
  );
} 

export const Layout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    HelveticaNeue: require('../assets/fonts/helvetica/HelveticaNeueLTProBdEx.otf'),
    HelveticaNeueLT: require('../assets/fonts/helvetica/HelveticaNeueLTProUltLt.otf'),  
    ProximaNova: require('../assets/fonts/Fonts/Proxima Nova/ProximaNova-Light.otf'),
    ProximaNovaR: require('../assets/fonts/Fonts/Proxima Nova/ProximaNova-Regular.otf'),
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
       <Stack initialRouteName="(routes)/splashscren/index" screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(routes)/splashscren/index" />
        <Stack.Screen name="(routes)/login/index" />
        <Stack.Screen name="(routes)/SuccessModalScreen/index" />
        
       </Stack>
   );
}
