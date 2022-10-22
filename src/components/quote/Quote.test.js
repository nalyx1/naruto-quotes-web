import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Quote } from './Quote';

test('Renderizando botão e frases do naruto', () =>{
    render(<Quote>Quote</Quote>);
    const QuoteElem = screen.getByText('Quote');

    expect(QuoteElem).toBeInTheDocument();
})