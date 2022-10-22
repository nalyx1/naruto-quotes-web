import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('Renderiza um botão', () => {
    render(<Button>Quote No Jutso</Button>);
    const ButtonElem = screen.getByText('Quote No Jutso');

    expect(ButtonElem).toBeInTheDocument();
})

test('callback quando o botão é clicaco', () => {
    const Callback = jest.fn();
    render(<Button onClick={Callback}></Button>);

    const ButtonElem = screen.getByRole('button');
    fireEvent.click(ButtonElem);
    expect(ButtonElem).toBeInTheDocument();
})