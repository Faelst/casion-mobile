import React from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading'
import Routers from './src/routes/index'
import { NavigationProvider } from "./src/context/Navgation"

import {
  useFonts,
  PTSerif_400Regular,
  PTSerif_700Bold_Italic
} from '@expo-google-fonts/pt-serif'
import {
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontLoaded] = useFonts({
    PTSerif_400Regular,
    PTSerif_700Bold_Italic,
    Inter_500Medium,
    Inter_400Regular
  })

  if (!fontLoaded)
    return <AppLoading />

  return (
    <NavigationProvider>
      <Routers />
    </NavigationProvider>
  );
}
