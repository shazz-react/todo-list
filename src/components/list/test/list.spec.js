import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import List from '../index';

describe('List Test', () => {
  it('Should render correctly', () => {
    const updateItem = jest.fn();
    let wrapper = shallow(
      <List list={[{value: 'test', done: true}]} updateItem={updateItem} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    const list = wrapper.find('FlatList');
    list.renderProp('renderItem')({
      item: {value: 'test', done: true},
    });
  });
});
