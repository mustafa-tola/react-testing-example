import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
    const { getByText } = render( < App / > );
    const linkElement = getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders hello piaic text', () => {
    const { getByText } = render( < App / > );
    const linkElement = getByText(/hello piaic/i);
    expect(linkElement).toBeInTheDocument();
});