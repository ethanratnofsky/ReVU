import React from 'react';
const renderer = require('react-test-renderer');
import Comments from './Comments';

describe('<Comments />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Comments />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<Comments />).toJSON();
    expect(tree).toMatchSnapshot();
  });