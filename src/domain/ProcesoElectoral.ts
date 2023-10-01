import {
    findProcesoElectoral,
    findProcesoElectoralTipos,
    findProcesosElectorais
} from "../infrastructure/pega/ProcesosElectoraisRepository";
import {DateTime} from "luxon";
import {useQuery} from "@tanstack/react-query";

export interface ProcesoElectoral {
    id: number;
    tipo: TipoProcesoElectoral;
    ambito: number | null;
    data: DateTime;
}

export interface TipoProcesoElectoral {
    id: number;
    nome: string;
}

export function useProcesosElectoraisStore() {
    return useQuery({
        queryKey: ['procesos-electorais'],
        queryFn: findProcesosElectorais,
    });
}

export function useProcesoElectoralStore(id: number) {
    return useQuery({
        queryKey: ['proceso-electoral', id],
        queryFn: () => findProcesoElectoral(id),
    });
}

export function useProcesoElectoralTiposStore() {
    return useQuery({
        queryKey: ['proceso-electoral-tipos'],
        queryFn: () => findProcesoElectoralTipos,
    });
}
