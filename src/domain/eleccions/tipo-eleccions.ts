import { BasicEntity } from '@/domain/BasicEntity';

const TIPO_ELECCIONS: BasicEntity[] = [
    { id: 4, label: 'Europeas' },
    { id: 1, label: 'Xerais' },
    { id: 3, label: 'Autonómicas' },
    { id: 2, label: 'Municipais' },
];

export function findAllTiposEleccions(): BasicEntity[] {
    return TIPO_ELECCIONS;
}

export function findTipoEleccionsById(id: number): BasicEntity | null {
    const eleccion = TIPO_ELECCIONS.find((tipo) => tipo.id === id);
    return eleccion ? eleccion : null;
}
