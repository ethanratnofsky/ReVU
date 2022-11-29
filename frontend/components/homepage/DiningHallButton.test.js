import React from 'react';
const renderer = require('react-test-renderer');
import DiningHallButton from './DiningHallButton';

describe('<DiningHallButton />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<DiningHallButton />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<DiningHallButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });