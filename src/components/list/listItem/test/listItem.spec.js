import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import ListItem from '../index';

describe('ListItem Test', () => {
  const updateItem = jest.fn();
  const deleteItem = jest.fn();

  it('Should render correctly', () => {
    let wrapper = shallow(
      <ListItem
        item={{value: 'test', done: true}}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.at(0).renderProp('onPress')();
    touchableOpacity.at(1).renderProp('onPress')();
  });

  it('Should render correctly - false', () => {
    let wrapper = shallow(
      <ListItem
        item={{value: 'test', done: false}}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.at(0).renderProp('onPress')();
    touchableOpacity.at(1).renderProp('onPress')();
  });

  it('Should render correctly - null', () => {
    let wrapper = shallow(
      <ListItem item={null} updateItem={updateItem} deleteItem={deleteItem} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const touchableOpacity = wrapper.find('TouchableOpacity');
    touchableOpacity.at(0).renderProp('onPress')();
    touchableOpacity.at(1).renderProp('onPress')();
  });
});
