import React from 'react';
const renderer = require('react-test-renderer');
import Login from './Login';

describe('<Login />', () => {
  it('has 4 children', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });