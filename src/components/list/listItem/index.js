import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const ListItem = ({item, updateItem}) => {
  return (
    <View>
      <View style={styles.listItem}>
        <TouchableOpacity
          style={styles.check}
          onPress={() => {
            updateItem({...item, done: !item?.done});
          }}
        />
        <Text style={item?.done ? styles.textDone : styles.text}>
          {item?.value}
        </Text>
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default ListItem;
