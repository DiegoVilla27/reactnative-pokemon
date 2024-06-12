import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/home";
import PokemonScreen from "@screens/pokemon";
import routes from "@routes/list";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.home}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name={routes.home}
          component={HomeScreen}
        />
        <Stack.Screen
          name={routes.pokemon}
          component={PokemonScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
