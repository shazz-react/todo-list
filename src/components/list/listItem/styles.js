import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 16,
  },
  textDone: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
  },
  listItem: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
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
