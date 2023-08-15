import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {ListItemProps} from '../../../types';
import styles from './styles';

const ListItem = ({
  item,
  updateItem,
  deleteItem,
}: ListItemProps): React.JSX.Element => (
  <View>
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => updateItem(item)}>
        <Icon name={item?.done ? 'check-box' : 'check-box-outline-blank'} />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={item?.done ? styles.textDone : styles.text}>
        {item?.value}
      </Text>
      <TouchableOpacity onPress={() => deleteItem(item)} style={{}}>
        <Icon name="close" size={20} color="grey" />
      </TouchableOpacity>
    </View>
    <View style={styles.seperator} />
  </View>
);

export default ListItem;
