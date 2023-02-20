import React from 'react';
import { render, screen } from '@testing-library/react';
import ProtoDemo from '../ProtoDemo';

test('renders protodemo component', () => {
    // const {ProtoDemo} = render(<ProtoDemo />);
    render(<ProtoDemo />);
    // const buttonTitle = screen.getByText(/get data/i);
    // Find MyInnerComponent by its test ID
    const ButtonComponent = screen.getByTestId('my-inner-component');
    expect(ButtonComponent).toBeInTheDocument();
});