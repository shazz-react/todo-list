/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoList from './src/screens/TodoList';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightgrey'}}>
        <TodoList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
