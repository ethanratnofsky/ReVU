import React from 'react';
const renderer = require('react-test-renderer');
import Complaints from './Complaints';

describe('<Complaints />', async () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Complaints />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

// it('renders correctly', async () => {
//     const tree = renderer.create(<Complaints />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });