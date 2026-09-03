import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/views/Home";
import Movie from "./src/views/Movies";
import Movies from "./src/views/Movies";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home}></Stack.Screen>
        <Stack.Screen name="MoviesScreen" component={Movies}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
