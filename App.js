import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

SplashScreen.preventAutoHideAsync();

const loadFont = () => {
  return Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
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
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Go to Home",
          }}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
