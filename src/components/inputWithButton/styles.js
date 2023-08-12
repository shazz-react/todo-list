import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    height: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'mediumturquoise',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;