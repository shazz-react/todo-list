import {useState} from 'react';
import {View} from 'react-native';
import InputWithButton from '../../components/inputWithButton';
import List from '../../components/list';

const TodoList = () => {
  const [list, setList] = useState([]);

  return (
    <View>
      <InputWithButton
        onPress={input => {
          if (input && input?.length > 0) {
            setList(prevList => [...prevList, input]);
          }
        }}
      />
      <List list={list} />
    </View>
  );
};

export default TodoList;
