import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { AppBar } from "@react-native-material/core";
import Manipular from "./src/pages/Editar/views/Manipular";
import Listagem from "./src/pages/Listagem/views/Listagem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AppBar title="Minha Lista de Compras" style={{ marginTop: "8%" }} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista">
          <Stack.Screen name="Lista" component={Listagem} />
          <Stack.Screen name="Manipular" component={Manipular} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
