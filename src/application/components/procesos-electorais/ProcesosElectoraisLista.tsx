import {
    TipoProcesoElectoralId,
    TiposProcesoElectoral,
    useProcesosElectoraisStore
} from "../../../domain/ProcesoElectoral";
import {Link} from "react-router-dom";
import {List, ListItem} from "@mui/material";

export function ProcesosElectoraisLista() {
    const {data} = useProcesosElectoraisStore();

    return (
        <>
            <h1>Resultados de Procesos Electorais</h1>
            <List>
                {data?.map((proceso, index) => (
                    <ListItem key={index}><Link to={`proceso-electoral/${proceso.id}`}>{extractTipoName(proceso.tipo)} {proceso.data.toLocaleString()}</Link></ListItem>
                ))}
            </List>
        </>
    );
}

function extractTipoName(tipo: TipoProcesoElectoralId) {
    const t = TiposProcesoElectoral.get(tipo);
    return t?.nome ?? "Desconocido";
}
