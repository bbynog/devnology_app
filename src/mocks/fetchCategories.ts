import { customColors } from 'theme';
import { CircleGradientButtonTO } from 'types';
const { salmon, gold, blue, lightBlue, grass, avocado } = customColors;

export const categoriesData: CircleGradientButtonTO[] = [
  {
    id: 1,
    label: 'Apparel',
    firstColor: salmon,
    secondColor: gold,
    iconName: 'tshirt-v',
  },
  {
    id: 2,
    label: 'Beauty',
    firstColor: blue,
    secondColor: lightBlue,
    iconName: 'lipstick',
  },
  {
    id: 3,
    label: 'Shoes',
    firstColor: grass,
    secondColor: avocado,
    iconName: 'shoe-heel',
  },
];
