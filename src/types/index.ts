//Lib
import React from 'react';

/* ------- USER --------- */

export type UserType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
}

/* ----- COMPONENTS ----- */

export type ActivityType = {
  id: string | undefined;
  key?: string;
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
  children?: React.ReactNode;
  disabled?: boolean;
}

export type ModalType = {
  name: string;
  label: string;
  btnLabel: string;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => boolean;
  callback: () => void;
}

export interface IconNames {
  [key: string]: string;

}

/* ----- CONTEXT ----- */

export type ContextType = {
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}

/* ----- ACTIONS ----- */

export type FilterType = {
  type: string;
  value: string | number | null;
}


// export type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;