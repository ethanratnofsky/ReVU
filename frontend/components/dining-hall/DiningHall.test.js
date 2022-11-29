import React from 'react';
const renderer = require('react-test-renderer');
import DiningHall from './DiningHall';

describe('<DiningHall />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<DiningHall />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<DiningHall />).toJSON();
    expect(tree).toMatchSnapshot();
  });