export type ActivityType = {
  id: string;
  _key?: number;
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  accessibility: number;
  myList?: boolean;
}

export type ButtonType = {
  label?: string;
  style?: any;
  onPress: () => void;
  loading?: boolean;
  children?: any;
  disabled?: boolean;
}

export interface IconNames {
  [key: string]: string;

}

// export type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;