import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InformationList from './components/InformationList';
import InformationDetail from './components/InformationDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Information List" component={InformationList} />
        <Stack.Screen name="Detail" component={InformationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
