import { findComunidadesAutonomasById } from '@/domain/eleccions/division-administrativa';

describe('Divisions Administrativas', () => {
    describe('findComunidadesAutonomasById', () => {
        it('should return null when id is not found', () => {
            const id = 0;

            const result = findComunidadesAutonomasById(id);

            expect(result).toBeNull();
        });

        it('should return the comunidad when id is found', () => {
            const id = 1;

            const result = findComunidadesAutonomasById(id);

            expect(result).toEqual({ id: 1, label: 'Andalucía' });
        });
    });
});
