import React from 'react';
import Dropdown from './Dropdown';
const renderer = require('react-test-renderer');
import DropDown from './Dropdown';

describe('<Dropdown />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });