/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TodoList from './src/screens/TodoList';

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <TodoList/>
    </SafeAreaView>
  );
}

export default App;
