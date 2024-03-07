import { BasicEntity } from '@/domain/BasicEntity';

const TIPO_ELECCIONS: BasicEntity[] = [
    { id: 1, nome: 'Europeas', color: 'primary' },
    { id: 2, nome: 'Xerais', color: 'secondary' },
    { id: 3, nome: 'Autonómicas', color: 'success' },
    { id: 4, nome: 'Municipais', color: 'warning' },
];

export function findAllTiposEleccions(): BasicEntity[] {
    return TIPO_ELECCIONS;
}

export function findTipoEleccionsById(id: number): BasicEntity | null {
    const eleccion = TIPO_ELECCIONS.find((tipo) => tipo.id === id);
    return eleccion ? eleccion : null;
}
