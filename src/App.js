import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './screens/Home'
import Description from './screens/Description'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title:'Home'}}></Stack.Screen>
        <Stack.Screen name="Description" component={Description} options={{title:'Description'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;