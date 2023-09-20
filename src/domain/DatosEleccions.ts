import {DateTime} from "luxon";

export interface DatosEleccions {
    censoIne: number;
    censoCERA: number;
    censoCERE: number;
    horaPrimerAvanceParticipacion: DateTime;
    horaSegundoAvanceParticipacion: DateTime;
}
