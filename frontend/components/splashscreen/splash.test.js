import React from 'react';
const renderer = require('react-test-renderer');
import SplashScreen from './SplashScreen';

describe('<SplashScreen />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<SplashScreen />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<SplashScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });