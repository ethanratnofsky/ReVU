import React from 'react';
const renderer = require('react-test-renderer');
import CommentInput from './CommentInput';

describe('<CommentInput />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CommentInput />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<CommentInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });