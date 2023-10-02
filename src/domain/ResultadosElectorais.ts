import {Candidatura} from "./Candidatura";
import {useQuery} from "@tanstack/react-query";
import {
    findResultadoCandidaturasByProceso,
    findResultadoXeralByProceso
} from "../infrastructure/pega/ResultadosElectoraisRepository";

export interface ResultadoElectoral {
    votantesPrimeiroAvanceParticipacion: number;
    votantesSegundoAvanceParticipacion: number;
    votantesCere: number;
    votosBranco: number;
    votosNulos: number;
    votosCandidaturas: number;
}

export interface ResultadoCandidatura {
    candidatura: Candidatura;
    representantesEleitos: number;
    votos: number;
}

export function useResultadosElectoraisStore(id: number) {
    return useQuery({
        queryKey: ['resultados-electorais-xerais'],
        queryFn: () => findResultadoXeralByProceso(id),
    });
}

export function useResultadosCandidaturasStore(id: number) {
    return useQuery({
        queryKey: ['resultados-electorais-candidaturas'],
        queryFn: () => findResultadoCandidaturasByProceso(id),
    });
}
