import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import ListItem from './listItem';
import {TodoItem, ListProps} from '../../types';

const List = ({list, updateItem}: ListProps): JSX.Element => {
  const renderItem: ListRenderItem<TodoItem> = ({item}) => (
    <ListItem item={item} updateItem={updateItem} />
  );
  return <FlatList data={list} renderItem={renderItem} />;
};

export default List;
