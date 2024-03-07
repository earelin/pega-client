import { BasicEntity } from '@/domain/BasicEntity';

export function findAllComunidadesAutonomas(): BasicEntity[] {
    return [
        { id: 1, label: 'Andalucía' },
        { id: 2, label: 'Aragón' },
        { id: 3, label: 'Asturias' },
        { id: 4, label: 'Baleares' },
        { id: 5, label: 'Canarias' },
        { id: 6, label: 'Cantabria' },
        { id: 7, label: 'Castilla y León' },
        { id: 8, label: 'Castilla-La Mancha' },
        { id: 9, label: 'Cataluña' },
        { id: 10, label: 'Extremadura' },
        { id: 11, label: 'Galicia' },
        { id: 12, label: 'Madrid' },
        { id: 13, label: 'Murcia' },
        { id: 14, label: 'Navarra' },
        { id: 15, label: 'País Vasco' },
        { id: 16, label: 'La Rioja' },
        { id: 17, label: 'Valencia' },
        { id: 18, label: 'Ceuta' },
        { id: 19, label: 'Melilla' },
    ].sort((a, b) => a.label.localeCompare(b.label));
}

export function findComunidadesAutonomasById(id: number): BasicEntity | null {
    const comunidade = findAllComunidadesAutonomas().find(
        (comunidad) => comunidad.id === id,
    );
    return comunidade ? comunidade : null;
}
