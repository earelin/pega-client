import {ProcesoElectoral, TipoProcesoElectoral} from "../../domain/ProcesoElectoral";
import {DateTime} from "luxon";
import {restClientGet} from "../client/RestClient";

const listUrl = process.env.REACT_APP_PEGA_API_URL + '/procesos-electorais';
const entityUrl = process.env.REACT_APP_PEGA_API_URL + '/proceso-electoral';

interface ProcesoElectoralDao {
    id: number;
    tipo: TipoProcesoElectoral;
    ambito: number;
    data: string;
}

export async function findProcesosElectorais() {
    const daos = await restClientGet<ProcesoElectoralDao[]>(listUrl)
    return daos.map(dao => ({
        ...dao,
        data: DateTime.fromISO(dao.data)
    } as ProcesoElectoral));
}

export async function findProcesoElectoral(id: number): Promise<ProcesoElectoral | null> {
    const dao = await restClientGet<ProcesoElectoralDao>(`${entityUrl}/${id}`);
    if (!dao) {
        return null;
    }

    return {
        ...dao,
        data: DateTime.fromISO(dao.data)
    } as ProcesoElectoral;
}

export async function findProcesoElectoralTipos() {
    return restClientGet<TipoProcesoElectoral[]>(`${listUrl}/tipos`);
}
