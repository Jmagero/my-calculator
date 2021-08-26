import React from 'react';
import renderer from 'react-test-renderer';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

it('renders NavBar', () => {
    const tree = renderer.create(NavBar)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders Home link in NavBar component', () => {
    render(
    <BrowserRouter>
       <NavBar />
    </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
});

it('renders Quote link in NavBar component', () => {
    render(
        <BrowserRouter>
         <NavBar />
        </BrowserRouter>
     );
    expect(screen.getByText('Quote')).toBeInTheDocument();
});
