import 'react-native';
import React from 'react';
import Button from '../index';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

describe('Input With Button Test', () => {
  const onPress = jest.fn();
  it('Should render correctly', () => {
    let wrapper = shallow(<Button onPress={onPress} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const textInput = wrapper.find('TextInput');
    textInput.renderProp('onChangeText')('test');

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.renderProp('onPress')();
  });
});
