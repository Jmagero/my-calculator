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