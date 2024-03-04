import { BasicEntity } from '@/domain/BasicEntity';

export function findAllTiposEleccions(): BasicEntity[] {
    return [
        { id: 4, label: 'Europeas' },
        { id: 1, label: 'Xerais' },
        { id: 3, label: 'Autonómicas' },
        { id: 2, label: 'Municipais' },
    ];
}
