import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import AppWrapper from '@/components/AppWrapper';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 

  return (
    <AppWrapper />
  );
}
