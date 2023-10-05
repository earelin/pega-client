import {useQuery} from "@tanstack/react-query";
import {findComunidadesAutonomas, findProvincias} from "../infrastructure/pega/EntidadesAdministrativasRepository";

export interface EntidadeAdministrativa {
    id: number;
    nome: string;
    nivel: NivelAdministrivo;
}

export enum NivelAdministrivo {
    COMUNIDADE_AUTONOMA = 'COMUNIDADE_AUTONOMA',
    PROVINCIA = 'PROVINCIA',
    CONCELLO = 'CONCELLO',
    DISTRITO = 'DISTRITO',
    SECCION = 'SECCION',
}

export function useEntidadesAdministrativasStore(nivel: NivelAdministrivo = NivelAdministrivo.COMUNIDADE_AUTONOMA) {
    let queryFn;
    let queryKey;

    switch (nivel) {
        case NivelAdministrivo.COMUNIDADE_AUTONOMA:
            queryKey = ['comunidades-autonomas'];
            queryFn = findComunidadesAutonomas;
            break;
        case NivelAdministrivo.PROVINCIA:
            queryKey = ['provincias'];
            queryFn = findProvincias;
            break;
    }

    return useQuery({
        queryKey: queryKey,
        queryFn: queryFn,
    });
}
