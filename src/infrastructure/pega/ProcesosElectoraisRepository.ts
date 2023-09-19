import {restClientGet} from "../client/RestClient";
import {ProcesoElectoral} from "../../domain/ProcesoElectoral";
import {DateTime} from "luxon";

const url = process.env.REACT_APP_PEGA_API_URL + '/procesos-electorais';

interface ProcesoElectoralDao {
    id: number;
    tipo: string;
    ambito: number;
    data: string;
}

export async function getProcesosElectorais(): Promise<ProcesoElectoral[]> {
    const daos = await restClientGet<ProcesoElectoralDao[]>(url);
    return daos.map(dao => ({
        ...dao,
        data: DateTime.fromISO(dao.data)
    } as ProcesoElectoral));
}
