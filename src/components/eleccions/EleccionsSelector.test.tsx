import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EleccionsSelector from '@/components/eleccions/EleccionsSelector';

describe('EleccionsSelector', () => {
    it('renders', () => {
        render(<EleccionsSelector />);

        const tipoSelector = screen.getByTestId('tipo-selector');

        expect(tipoSelector).toBeInTheDocument();
    });
});
