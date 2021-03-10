import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import DrawPage from './src/components/drawPage/DrawPage';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  const test = 'test';
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DBB0FC',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="DrawPage"
          component={DrawPage}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="asdf"
                color="transparent"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
