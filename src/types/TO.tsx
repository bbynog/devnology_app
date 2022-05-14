import { MaterialCommunityIconName } from './IconNames';

export interface CircleGradientButtonTO {
  id: number;
  firstColor: string;
  secondColor: string;
  label: string;
  iconName: MaterialCommunityIconName;
  iconColor?: string;
}
