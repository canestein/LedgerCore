// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerCore/i);
    expect(titleElement).toBeInTheDocument();
});
