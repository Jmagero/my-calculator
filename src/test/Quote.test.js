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