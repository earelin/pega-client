import {restClientGet} from "../client/RestClient";
import {DatosXerais} from "../../domain/DatosXerais";

const entityUrl = process.env.REACT_APP_PEGA_API_URL + '/proceso-electoral';

export async function findDatosXeraisProceso(id: number) {
    return restClientGet<DatosXerais>(`${entityUrl}/${id}/datos-xerais`);
}
