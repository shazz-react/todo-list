import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    height: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
