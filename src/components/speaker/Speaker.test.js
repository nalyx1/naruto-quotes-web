import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Speaker } from './Speaker';

test('Renderizando botão e frases do naruto', () =>{
    render(<Speaker>Naruto</Speaker>);
    const SpeakerElem = screen.getByText('- Naruto');

    expect(SpeakerElem).toBeInTheDocument();
});