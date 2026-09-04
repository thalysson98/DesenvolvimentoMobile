import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/views/Home";
import Movies from "./src/views/Movies";


export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Home}></Tab.Screen>
        <Tab.Screen name="MoviesScreen" component={Movies}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
