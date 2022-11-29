import React from 'react';
const renderer = require('react-test-renderer');
import Home from './Home';

describe('<Home />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });