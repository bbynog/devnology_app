import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { BottomTabNavigator } from './navigation/TabNavigator/TabNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { theme } from './theme';

import 'react-native-gesture-handler';

export const Index = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const appTheme = {
    ...DefaultTheme,
    ...theme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors,
    },
  };

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync(Entypo.font);

        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <NavigationContainer theme={appTheme}>
          <BottomTabNavigator />
        </NavigationContainer>
        <StatusBar style={'auto'} />
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
