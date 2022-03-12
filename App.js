import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import { Provider as AuthProvider } from "./src/context/authContext";
import { setNavigator } from "./src/navigationRef";

import { Provider as LocationProvider } from "./src/context/LocationContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { Context as AuthContext } from "./src/context/authContext";

import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import TrackDetail from "./src/screens/main/TrackDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  const {
    state: { token },
  } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {token == null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={Register} />
          <Stack.Screen name="Signin" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#075e54",
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="bottomTabBar"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
            // options={{ title: "uTracker" }}
          />

          <Stack.Screen
            name="TrackDetail"
            component={TrackDetail}
            options={{
              title: "uTracker Detail",
              headerStyle: {
                backgroundColor: "#128c7e",
                // alignItems: 'center',
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            forwardRef={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
