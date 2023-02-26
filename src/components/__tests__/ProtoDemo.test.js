import React from 'react';
import { render, screen } from '@testing-library/react';
import ProtoDemo from '../ProtoDemo';
import { useNavigate } from 'react-router-dom';

// This is a mock function that we can use to check if the navigate function has been called
const mockedUsedNavigate = jest.fn();

// This is a mock function that checks if the useNavigate function has been called
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders protodemo component', () => {
    // const {ProtoDemo} = render(<ProtoDemo />);
    render(<ProtoDemo />);
    // const buttonTitle = screen.getByText(/get data/i);
    // Find MyInnerComponent by its test ID
    const ButtonComponent = screen.getByTestId('my-inner-component');
    expect(ButtonComponent).toBeInTheDocument();
});