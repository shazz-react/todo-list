import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    height: 40,
    marginHorizontal: 16,
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
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'mediumturquoise',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default styles;
