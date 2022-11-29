import React from 'react';
const renderer = require('react-test-renderer');
import MenuDisplay from './MenuDisplay';

describe('<MenuDisplay />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<MenuDisplay />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<MenuDisplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });