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
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
                backgroundColor: 'black',
              }}
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
