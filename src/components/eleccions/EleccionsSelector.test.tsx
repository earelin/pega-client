import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EleccionsSelectorForm from '@/components/eleccions/EleccionsSelector';

describe('EleccionsSelector', () => {
    it('renders', () => {
        render(<EleccionsSelectorForm />);

        const tipoSelector = screen.getByTestId('tipo-selector');

        expect(tipoSelector).toBeInTheDocument();
    });
});
