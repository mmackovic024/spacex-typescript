import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header, content and footer', () => {
  render(<App />);
  const gitElement = screen.getByText(/git/i);
  expect(gitElement).toBeInTheDocument();

  const CONTENTElement = screen.getByText(/CONTENT/i);
  expect(CONTENTElement).toBeInTheDocument();

  const FOOTERElement = screen.getByText(/FOOTER/i);
  expect(FOOTERElement).toBeInTheDocument();
});
