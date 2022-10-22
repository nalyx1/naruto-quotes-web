import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { 
    speaker: 'teste de speaker',
    quote: 'teste de quote'
};
const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renderiza o app', () => {
    render(<App />);
    const ButtonElem = screen.getByRole('button');
    const ImgElem = screen.getByRole('img');

    expect(ButtonElem).toBeInTheDocument();
    expect(ImgElem).toBeInTheDocument();
});

test('testa a resposta do server', async () => {
    const customResponse = {
        speaker: 'teste de speaker',
        quote: 'teste de quote'
};

    render(<App />);

    server.use(
        rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
          return res(ctx.json(customResponse));
        })
      );

    const ButtonElem = screen.getByRole('button');
    fireEvent.click(ButtonElem);

    const QuoteElem = await screen.findByText(/teste de speaker/i);
    expect(QuoteElem).toBeInTheDocument();
});
