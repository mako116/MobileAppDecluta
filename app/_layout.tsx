// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { AuthProvider } from '@/context/AuthContext';
// import { CartProvider } from '@/context/CartContext';
// import { OfferProvider } from '@/context/OfferContext';
// import { persistor, store } from '@/redux/store';
// import { Provider } from 'react-redux';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { PersistGate } from 'redux-persist/integration/react';

// const queryClient = new QueryClient();





// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <QueryClientProvider client={queryClient}>
//             <AuthProvider>  {/* Add this line */}
//               <CartProvider>
//                 <OfferProvider>
//                   <Layout />
//                 </OfferProvider>
//               </CartProvider>
//             </AuthProvider>  {/* Add this line */}
//           </QueryClientProvider>
//         </PersistGate>
//       </Provider>
//     </GestureHandlerRootView>
//   );
// }

// export const Layout = () => {
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     HelveticaNeue: require('../assets/fonts/helvetica/HelveticaNeueLTProBdEx.otf'),
//     HelveticaNeueLT: require('../assets/fonts/helvetica/HelveticaNeueLTProUltLt.otf'),  
//     ProximaNova: require('../assets/fonts/Fonts/Proxima Nova/ProximaNova-Light.otf'),
//     ProximaNovaR: require('../assets/fonts/Fonts/Proxima Nova/ProximaNova-Regular.otf'),
//     ProximaNovaSemi: require('../assets/fonts/proxima-nova/ProximaNova-SemiboldIt.ttf'),
//     ProximaNovaBold: require('../assets/fonts/proxima-nova/ProximaNova-Bold.ttf'),
//     PoppinsBold: require('../assets/fonts/poppins/Poppins-Bold.ttf'),
//     Poppins: require('../assets/fonts/poppins/Poppins-Medium.ttf'),
//   });

//   if (!loaded) {
//     return null;
//   }
//   return (
//        <Stack initialRouteName="(routes)/splashscren/index" screenOptions={{headerShown:false}}>
//         <Stack.Screen name="index"/>
//         <Stack.Screen name="(routes)/splashscren/index" />
//         <Stack.Screen name="(routes)/login/index" />
//         <Stack.Screen name="(routes)/SuccessModalScreen/index" />
//        </Stack>
//    );
// }




import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
 
import { CartProvider } from '@/context/CartContext';
import { OfferProvider } from '@/context/OfferContext';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { useAppDispatch } from '@/redux/Redux/hook/hook';
import { initializeAuth } from '@/redux/Redux/slice/authSlice';

const queryClient = new QueryClient();

// Component to initialize auth state
const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  
  return <>{children}</>;
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AuthInitializer>
              <CartProvider>
                <OfferProvider>
                  <Layout />
                </OfferProvider>
              </CartProvider>
            </AuthInitializer>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
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
  
  if (!loaded) {
    return null;
  }
  
  return (
    <Stack initialRouteName="(routes)/splashscren/index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(routes)/splashscren/index" />
      <Stack.Screen name="(routes)/login/index" />
      <Stack.Screen name="(routes)/SuccessModalScreen/index" />
    </Stack>
  );
}