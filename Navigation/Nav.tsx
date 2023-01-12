import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import { RootNavigatorParamList } from "../types/types";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
