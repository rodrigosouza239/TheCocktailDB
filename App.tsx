import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/redux/store';

import {DrinksScreen} from './src/screens/DrinksScreen';
import {FiltersScreen} from './src/screens/FiltersScreen';
import {RootStackParamList} from './src/interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drinks"
            component={DrinksScreen}
            options={{
              header: () => <></>,
            }}
          />
          <Stack.Screen name="Filters" component={FiltersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
