import React from 'react';
const renderer = require('react-test-renderer');
import TermsAndConditions from './TermsAndConditions';

describe('<TermsAndConditions />', () => {
  it('has 5 children', () => {
    const tree = renderer.create(<TermsAndConditions />).toJSON();
    expect(tree.children.length).toBe(5);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<TermsAndConditions />).toJSON();
    expect(tree).toMatchSnapshot();
  });