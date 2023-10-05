import {EntidadeAdministrativa, NivelAdministrivo} from "../../domain/EntidadeAdministrativa";
import {restClientGet} from "../client/RestClient";

const comunidadesAutonomasUrl = process.env.REACT_APP_PEGA_API_URL + '/comunidades-autonomas';
const provinciasUrl = process.env.REACT_APP_PEGA_API_URL + '/provincias';

interface EntidadeAdministrativaDao {
    id: number;
    nome: string;
}

export async function findComunidadesAutonomas() {
    const comunidadesAutonomas = await restClientGet<EntidadeAdministrativaDao[]>(comunidadesAutonomasUrl)
    return comunidadesAutonomas.map(comunidadeAutonoma => ({
        ...comunidadeAutonoma,
        nivel: NivelAdministrivo.COMUNIDADE_AUTONOMA
    })) as EntidadeAdministrativa[];
}

export async function findProvincias() {
    const provincias = await restClientGet<EntidadeAdministrativaDao[]>(provinciasUrl)
    return provincias.map(ca => ({
        ...ca,
        nivel: NivelAdministrivo.PROVINCIA
    })) as EntidadeAdministrativa[];
}
