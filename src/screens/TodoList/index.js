import {useState} from 'react';
import {View} from 'react-native';
import InputWithButton from '../../components/inputWithButton';
import List from '../../components/list';

const TodoList = () => {
  const [list, setList] = useState([]);

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <List
        list={list}
        updateItem={item => {
          let newList = [...list];
          newList.forEach(listItem => {
            if (item.value === listItem.value) {
              listItem.done = item.done;
            }
          });
          setList(newList);
        }}
      />
      <InputWithButton
        onPress={input => {
          if (
            input &&
            input?.length > 0 &&
            list.findIndex(item => item.value === input) === -1
          ) {
            setList(prevList => [...prevList, {value: input, done: false}]);
          }
        }}
      />
    </View>
  );
};

export default TodoList;
