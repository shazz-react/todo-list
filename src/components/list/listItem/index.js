import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';

const ListItem = ({item, updateItem}) => (
  <View>
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => {
          updateItem({...item, done: !item?.done});
        }}>
        <Icon name={item?.done ? 'check-box' : 'check-box-outline-blank'} />
      </TouchableOpacity>
      <Text style={item?.done ? styles.textDone : styles.text}>
        {item?.value}
      </Text>
    </View>
    <View style={styles.seperator} />
  </View>
);

export default ListItem;
