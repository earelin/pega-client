import useSWR from 'swr';
import { BasicEntity } from '@/domain/BasicEntity';
import { findTipoEleccionsById } from '@/domain/eleccions/tipo-eleccions';
import { findComunidadesAutonomasById } from '@/domain/eleccions/division-administrativa';

export interface Eleccion {
    id: number;
    data: string;
    tipo: BasicEntity;
    ambito: BasicEntity;
}

export interface EleccionsFilter {
    tipo: number;
    ambito: number;
}

interface EleccionRaw {
    id: number;
    data: string;
    tipo: number;
    ambito: number;
}

export function useEleccionsList(filter: EleccionsFilter) {
    const eleccionsFetcher = async (url: string, f: EleccionsFilter) => {
        const params = new URLSearchParams();
        if (f.tipo !== 0) {
            params.append('tipo', f.tipo.toString());
        }
        if (f.ambito !== 0) {
            params.append('ambito', f.ambito.toString());
        }

        const requestUrl = params.size === 0 ? url : `${url}?${params}`;
        const response = await fetch(requestUrl);
        const eleccionsRaw = (await response.json()) as EleccionRaw[];
        return eleccionsRaw.map(
            (eleccionRaw) =>
                ({
                    id: eleccionRaw.id,
                    data: eleccionRaw.data,
                    tipo: findTipoEleccionsById(eleccionRaw.tipo),
                    ambito: eleccionRaw.ambito
                        ? findComunidadesAutonomasById(eleccionRaw.ambito)
                        : null,
                }) as Eleccion,
        );
    };

    const { data, error, isLoading } = useSWR(
        ['/api/eleccions', filter],
        async ([url, filter]) => await eleccionsFetcher(url, filter),
    );

    return {
        eleccions: data,
        isLoading: isLoading,
        isError: error,
    };
}
