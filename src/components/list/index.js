import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './listItem';

const List = ({list, updateItem}) => {
  const renderItem = ({item}) => (
    <ListItem item={item} updateItem={updateItem} />
  );

  return <FlatList data={list} renderItem={renderItem} />;
};

export default List;
