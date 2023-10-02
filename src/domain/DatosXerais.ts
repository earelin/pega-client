import {DateTime} from "luxon";
import {useQuery} from "@tanstack/react-query";
import {findDatosXeraisProceso} from "../infrastructure/pega/DatosXeraisRepository";

export interface DatosXerais {
    censoIne: number;
    censoCera: number;
    censoCere: number;
    horaPrimerAvanceParticipacion: DateTime;
    horaSegundoAvanceParticipacion: DateTime;
}

export function useDatosXeraisStore(id: number) {
    return useQuery({
        queryKey: ['datos-xerais-proceso'],
        queryFn: () => findDatosXeraisProceso(id),
    });
}
