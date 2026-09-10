import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import Home from "./src/views/Home";
import Movies from "./src/views/Movies";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={Home} options={{ title: 'Início' }} />
          <Tab.Screen name="MoviesScreen" component={Movies} options={{ title: 'Filmes' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
