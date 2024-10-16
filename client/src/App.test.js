import { render, screen } from '@testing-library/react';
import App from './App';

test('renders registration form', () => {
  render(<App />);
  const headingElement = screen.getByText(/registration/i);
  expect(headingElement).toBeInTheDocument();
  
  const usernameInput = screen.getByPlaceholderText(/username/i);
  expect(usernameInput).toBeInTheDocument();
  
  const emailInput = screen.getByPlaceholderText(/email/i);
  expect(emailInput).toBeInTheDocument();
  
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
  
  const registerButton = screen.getByText(/register/i);
  expect(registerButton).toBeInTheDocument();
});








