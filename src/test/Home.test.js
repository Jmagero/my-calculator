import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

it("renders Home", ()=>{
    const tree = renderer
    .create(<Home />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders Welcome page", () =>{
    render(<Home />)
    const title = screen.getByText('Welcome to our page!');
    expect(title).toBeInTheDocument();
})