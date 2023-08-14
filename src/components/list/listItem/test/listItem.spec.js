import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import ListItem from '../index';

describe('ListItem Test', () => {
  it('Should render correctly', () => {
    const updateItem = jest.fn();
    let wrapper = shallow(
      <ListItem item={{value: 'test', done: true}} updateItem={updateItem} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.renderProp('onPress')();
  });

  it('Should render correctly - false', () => {
    const updateItem = jest.fn();
    let wrapper = shallow(
      <ListItem item={{value: 'test', done: false}} updateItem={updateItem} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.renderProp('onPress')();
  });

  it('Should render correctly - false', () => {
    const updateItem = jest.fn();
    let wrapper = shallow(<ListItem item={null} updateItem={updateItem} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.renderProp('onPress')();
  });
});
