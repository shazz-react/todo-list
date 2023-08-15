import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import TodoList from '../index';
import List from '../../../components/list';
import Button from '../../../components/inputWithButton';

const listData = [
  {
    value: 'test',
    done: true,
  },
  {
    value: 'test 1',
    done: false,
  },
];
const itemData = {
  value: 'test',
  done: true,
};

describe('To DO List test', () => {
  let wrapper;
  beforeEach(() => {
    const spy = jest.spyOn(React, 'useState');
    spy.mockReturnValue([listData, jest.fn()]);
    wrapper = shallow(<TodoList />);
  });
  it('Should render correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    let list = wrapper.find(List);
    list.renderProp('updateItem')(itemData);
    list.renderProp('deleteItem')(itemData);

    let button = wrapper.find(Button);
    button.renderProp('onPress')('test 2');
    button.renderProp('onPress')(null);
  });
});
