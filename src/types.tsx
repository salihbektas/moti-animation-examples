import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  BaseScreen: undefined;
  FadeIn: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type BaseScreenProps = NativeStackScreenProps<RootStackParamList, 'BaseScreen'>;
export type FadeInProps = NativeStackScreenProps<RootStackParamList, 'FadeIn'>;