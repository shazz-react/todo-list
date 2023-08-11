import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useRef} from 'react';

const InputWithButton = ({onPress}) => {
  const inputRef = useRef(null);

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          inputRef.current = text;
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress(inputRef.current);
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputWithButton;
