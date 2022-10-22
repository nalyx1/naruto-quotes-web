import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getQuote } from './QuoteService';
import '@testing-library/jest-dom';

const response = { teste: 'isso é um teste' };
const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('testa a resposta do server', async () => {
    const quote = await getQuote();
    expect(quote).toStrictEqual(response);
});