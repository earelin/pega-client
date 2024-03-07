import { BasicEntity } from '@/domain/BasicEntity';

export function findAllComunidadesAutonomas(): BasicEntity[] {
    return [
        { id: 1, nome: 'Andalucía' },
        { id: 2, nome: 'Aragón' },
        { id: 3, nome: 'Asturias' },
        { id: 4, nome: 'Baleares' },
        { id: 5, nome: 'Canarias' },
        { id: 6, nome: 'Cantabria' },
        { id: 7, nome: 'Castilla y León' },
        { id: 8, nome: 'Castilla-La Mancha' },
        { id: 9, nome: 'Cataluña' },
        { id: 10, nome: 'Extremadura' },
        { id: 11, nome: 'Galicia' },
        { id: 12, nome: 'Madrid' },
        { id: 13, nome: 'Murcia' },
        { id: 14, nome: 'Navarra' },
        { id: 15, nome: 'País Vasco' },
        { id: 16, nome: 'La Rioja' },
        { id: 17, nome: 'Valencia' },
        { id: 18, nome: 'Ceuta' },
        { id: 19, nome: 'Melilla' },
    ].sort((a, b) => a.nome.localeCompare(b.nome));
}

export function findComunidadesAutonomasById(id: number): BasicEntity | null {
    const comunidade = findAllComunidadesAutonomas().find(
        (comunidad) => comunidad.id === id,
    );
    return comunidade ? comunidade : null;
}
