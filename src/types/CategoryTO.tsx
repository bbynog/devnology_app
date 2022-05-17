import { MaterialCommunityIconName } from './IconNames';

export interface CategoryTO {
  id: string;
  firstColor: string;
  secondColor: string;
  label: string;
  iconName: MaterialCommunityIconName;
  iconColor?: string;
}
