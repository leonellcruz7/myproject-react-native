import "react-native-gesture-handler";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

SplashScreen.preventAutoHideAsync();

const loadFont = () => {
  return Font.loadAsync({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFont();
      } catch (err) {
        console.log(err);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  if (!isReady) return null;
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          initialParams={{
            name: "leonell",
          }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          initialParams={{
            name: "leonell",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
