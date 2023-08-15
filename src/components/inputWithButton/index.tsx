import React, {useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {InputWithButtonProps} from '../../types';
import styles from './styles';

const InputWithButton = ({onPress}: InputWithButtonProps) => {
  const inputRef = useRef<string>('');

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task here"
        selectionColor="black"
        onChangeText={text => {
          inputRef.current = text;
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress(inputRef.current.trim());
        }}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputWithButton;
