import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  textDone: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
  },
  listItem: {
    height: 50,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  seperator: {
    height: 1,
    marginHorizontal: 16,
    backgroundColor: 'grey',
  },
});

export default styles;
