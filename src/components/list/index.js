import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const List = ({list, updateItem}) => (
  <FlatList
    data={list}
    renderItem={({item}) => {
      return (
        <View>
          <View style={styles.listItem}>
            <TouchableOpacity
              style={styles.check}
              onPress={() => {
                updateItem({...item, done: !item.done});
              }}
            />
            <Text style={item.done ? styles.textDone : styles.text}>
              {item?.value}
            </Text>
          </View>
          <View style={styles.seperator} />
        </View>
      );
    }}
  />
);

export default List;
