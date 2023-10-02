import {restClientGet} from "../client/RestClient";
import {ResultadoCandidatura, ResultadoElectoral} from "../../domain/ResultadosElectorais";

const entityUrl = process.env.REACT_APP_PEGA_API_URL + '/proceso-electoral';

export async function findResultadoXeralByProceso(id: number) {
    return restClientGet<ResultadoElectoral>(`${entityUrl}/${id}/resultados`);
}

export async function findResultadoCandidaturasByProceso(id: number) {
    return restClientGet<ResultadoCandidatura[]>(`${entityUrl}/${id}/resultados/candidaturas`);
}
