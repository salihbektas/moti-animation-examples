import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  BaseScreen: undefined;
  FadeIn: undefined;
  Move: undefined;
  TwoD: undefined;
  ContinuousTwoD: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type BaseScreenProps = NativeStackScreenProps<RootStackParamList, 'BaseScreen'>;
export type FadeInProps = NativeStackScreenProps<RootStackParamList, 'FadeIn'>;
export type MoveProps = NativeStackScreenProps<RootStackParamList, 'Move'>;
export type TwoDProps = NativeStackScreenProps<RootStackParamList, 'TwoD'>;
export type ContinuousTwoDProps = NativeStackScreenProps<RootStackParamList, 'ContinuousTwoD'>;