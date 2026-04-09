import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio headline', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByRole('heading', {
    name: /frontend interfaces built for clarity, performance, and product trust/i,
  });

  expect(headingElement).toBeInTheDocument();
});
