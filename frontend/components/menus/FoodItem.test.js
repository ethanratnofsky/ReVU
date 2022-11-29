import React from 'react';
import FoodItem from './FoodItem';
const renderer = require('react-test-renderer');

describe('<FoodItem />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<FoodItem />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<FoodItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });