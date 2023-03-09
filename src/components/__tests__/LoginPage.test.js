import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../pages/LoginPage';
import LoginWindow from '../LoginWindow';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LoginPage', () => {
    const { queryAllByTestId } = render(
        <Router>
            <LoginPage />
        </Router>
    );
    test('renders the login page', () => {
        const textElement = screen.getByText(/Login/i);
        expect(textElement).toBeInTheDocument();
    });

    test('check if login window is rendered in login page', () => {
        expect(queryAllByTestId('window-id')).toBeTruthy();
    });
});

describe('LoginWindow', () => {
    
    test('renders the login window', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );
        const email = "azdummy@gmail.com";
        const password = 'test';
        
        expect(screen.getByRole('heading', { name: "Login" })).toBeInTheDocument();
        
        fireEvent.change(screen.getByRole('textbox', { name: "" }), {
            persist: jest.fn(),
            target: { name: "", value: "azdummy@gmail.com" }
        });
        expect(screen.getByRole('textbox', { name: "" })).toHaveValue("azdummy@gmail.com");

        fireEvent.change(screen.getByRole('textbox', { name: "" }), {
            persist: jest.fn(),
            target: { name: "", value: "test" }
        });
        expect(screen.getByRole('textbox', { name: "" })).toHaveValue("test");
        fireEvent.click(screen.getByRole('button', { name: "Log In" }));
        fireEvent.click(screen.getByRole('button', { name: "Log In" }), {
            persist: jest.fn()
        });
    });

    test('Go to sign up page if user does not have an account', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );
        const email = "azdummy@gmail.com";
        const password = 'test';

        fireEvent.click(screen.getByRole('button', { name: "Create Account" }));
    });

    test('User forgot password', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );
        const email = "azdummy@gmail.com";
        const password = 'test';
        
        fireEvent.click(screen.getByRole('link', { name: "Forgot Password?" }));
    });

});

