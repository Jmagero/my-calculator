import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../Quote';

it("renders Quote", ()=>{
    const tree = renderer
    .create(<Quote />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders the quote", () =>{
    render(<Quote />)
    const quote = screen.getByText('Mathematics is not about numbers,equations, computations or algorithms: its about understanding- Willian Paul Thurston');
    expect(quote).toBeInTheDocument();
})