import {Candidatura} from "./Candidatura";

export interface ResultadosElectorais {
    votantesPrimerAvanceParticipacion: number;
    votantesSegundoAvanceParticipacion: number;
    votantesCere: number;
    votosEnBlanco: number;
    votosNulos: number;
    votosACandaturas: number;
    votosPorCandidatura: ResultadosCandidatura[];
}

export interface ResultadosCandidatura {
    candidatura: Candidatura;
    votos: number;
}
