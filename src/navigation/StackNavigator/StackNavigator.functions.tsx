import { BottomTabNavigatorParamsList, TabScreen } from 'navigation/types';
import { NavigationProp } from '@react-navigation/native';

export const handleBadgedCartIconPress = (
  navigation: NavigationProp<BottomTabNavigatorParamsList, TabScreen.CART>
) => {
  navigation.goBack();
  navigation.navigate(TabScreen.CART);
};
