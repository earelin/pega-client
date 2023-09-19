import {restClientGet} from "../client/RestClient";
import {ProcesoElectoral} from "../../domain/ProcesoElectoral";
import {DateTime} from "luxon";

const listUrl = process.env.REACT_APP_PEGA_API_URL + '/procesos-electorais';
const entityUrl = process.env.REACT_APP_PEGA_API_URL + '/proceso-electoral';

interface ProcesoElectoralDao {
    id: number;
    tipo: string;
    ambito: number;
    data: string;
}

export async function getProcesosElectorais(): Promise<ProcesoElectoral[]> {
    const daos = await restClientGet<ProcesoElectoralDao[]>(listUrl);
    return daos.map(dao => ({
        ...dao,
        data: DateTime.fromISO(dao.data)
    } as ProcesoElectoral));
}

export async function getProcesoElectoral(id: number): Promise<ProcesoElectoral | null> {
    const dao = await restClientGet<ProcesoElectoralDao>(`${entityUrl}/${id}`);
    if (!dao) {
        return null;
    }

    return ({
        ...dao,
        data: DateTime.fromISO(dao.data)
    } as ProcesoElectoral);
}
