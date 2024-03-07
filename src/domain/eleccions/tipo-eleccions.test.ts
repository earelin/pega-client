import { findTipoEleccionsById } from '@/domain/eleccions/tipo-eleccions';

describe('Tipo Eleccions', () => {
    describe('findTipoEleccionsById', () => {
        it('should return null when id is not found', () => {
            const id = 0;

            const result = findTipoEleccionsById(id);

            expect(result).toBeNull();
        });

        it('should return the tipo when id is found', () => {
            const id = 2;

            const result = findTipoEleccionsById(id);

            expect(result).toEqual({
                id: 2,
                nome: 'Xerais',
                color: 'secondary',
            });
        });
    });
});
