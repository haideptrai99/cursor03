import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from '../pages/HelloWorld';


describe('HelloWorld', () => {
  it('renders the heading', () => {
    render(<HelloWorld />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World');
  });

  it('renders the welcome message', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Welcome to the AI Coding Hackathon app.')).toBeInTheDocument();
  });
});
