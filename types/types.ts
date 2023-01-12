import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootNavigatorParamList = {
  Auth: undefined;
  Home: undefined;
  Post: { postId: string };
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Account: undefined;
};

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  Post: { postId: string };
};

export type AuthStackNavigatorParamList = {
  navigate: any;
  "Sign in": undefined;
  "Sign up": undefined;
};

export type PostRouteProp = RouteProp<RootNavigatorParamList, "Post">;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Feed"
>;

export type AccountRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  "Account"
>;

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  "Sign in"
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  "Sign up"
>;
