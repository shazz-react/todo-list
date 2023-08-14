import React from 'react';
import {configure} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({adapter: new Adapter()});

// const MockInput = () => <View />;
jest.mock('@rneui/themed', () => ({
  // AirbnbRating: jest.fn()
  //   Input: jest.fn(() => <MockInput />),
  Icon: jest.fn(() => <></>),
}));
