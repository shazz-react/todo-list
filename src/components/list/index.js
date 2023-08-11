import {FlatList, Text, View} from 'react-native';
import styles from './styles';

const List = ({list}) => (
  <FlatList
    data={list}
    renderItem={({item}) => {
      return (
        <View style={styles.listItem}>
          <Text style={styles.text}>{item}</Text>
        </View>
      );
    }}
  />
);

export default List;
