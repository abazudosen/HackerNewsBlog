import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackNavigatorParamList } from "../types/types";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign up"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign in"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
