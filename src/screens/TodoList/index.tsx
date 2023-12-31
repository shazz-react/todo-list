import React from 'react';
import {View} from 'react-native';
import InputWithButton from '../../components/inputWithButton';
import List from '../../components/list';
import {TodoItem} from '../../types';
import styles from './styles';

const TodoList = (): React.JSX.Element => {
  const [list, setList] = React.useState<TodoItem[]>([]);

  return (
    <View style={styles.main}>
      <List
        list={list}
        updateItem={(item: TodoItem) => {
          let newList = list.map((listItem: TodoItem) => {
            if (item.value === listItem.value) {
              listItem.done = !item.done;
            }
            return listItem;
          });
          setList(newList);
        }}
        deleteItem={(item: TodoItem) => {
          let newList = list.filter((listItem: TodoItem) => {
            return item.value !== listItem.value;
          });
          setList(newList);
        }}
      />
      <InputWithButton
        onPress={(input: string) => {
          if (
            input?.length > 0 &&
            list.findIndex((item: TodoItem) => item.value === input) === -1
          ) {
            const newItem: TodoItem = {value: input, done: false};
            setList(prevList => [...prevList, newItem]);
          }
        }}
      />
    </View>
  );
};

export default TodoList;
