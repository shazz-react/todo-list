import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useRef} from 'react';

const InputWithButton = ({onPress}) => {
  const inputRef = useRef(null);

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
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
        <Text style={{fontSize: 30, color: 'black'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputWithButton;
