import React from 'react';
import {View} from 'react-native';
import InputWithButton from '../../components/inputWithButton';
import List from '../../components/list';
import {TodoItem} from '../../types';
import styles from './styles';

const TodoList = (): JSX.Element => {
  const [list, setList] = React.useState<TodoItem[]>([]);

  return (
    <View style={styles.main}>
      <List
        list={list}
        updateItem={(item: TodoItem) => {
          let newList = [...list];
          newList.forEach((listItem: TodoItem) => {
            if (item.value === listItem.value) {
              listItem.done = item.done;
            }
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
