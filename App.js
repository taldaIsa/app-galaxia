import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import LocationScreen from "./screens/Location";
import MeteorScreen from "./screens/Meteors";
import AtualizaçoesScreen from "./screens/IssInfo";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name = "Atualizaçoes" component = {AtualizaçoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;