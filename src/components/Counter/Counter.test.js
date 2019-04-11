import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter.jsx';

describe('Counter.jsx', () => {
  const counter = shallow(<Counter />);

  test('check initial state', () => {
    expect(counter.state('count')).toBe(0);
    expect(counter.state('name')).toBe('horse');
  });
});
