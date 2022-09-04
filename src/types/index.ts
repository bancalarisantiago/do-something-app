export type ActivityType = {
  id: string;
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
  onPress: any;
  loading?: boolean;
  children?: any;
}

export interface IconNames {
  [key: string]: string;

}
