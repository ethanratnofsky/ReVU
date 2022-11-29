import React from 'react';
const renderer = require('react-test-renderer');
import FoodList from './FoodList';

describe('<FoodList />', () => {
  it('has 5 children', () => {
    const tree = renderer.create(<FoodList />).toJSON();
    expect(tree.children.length).toBe(5);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<FoodList />).toJSON();
    expect(tree).toMatchSnapshot();
  });