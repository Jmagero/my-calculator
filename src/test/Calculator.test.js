import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders "AC" button in Calculator component', () => {
  render(<Calculator />);
  expect(screen.getByText('AC')).toBeInTheDocument();
});

it('renders "=" button in Calculator component', () => {
  render(<Calculator />);
  expect(screen.getByText('=')).toBeInTheDocument();
});
