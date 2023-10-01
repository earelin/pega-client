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
                {data?.map(proceso => (
                    <ListItem key={proceso.id}>
                        <Link to={`proceso-electoral/${proceso.id}`}>
                            {extractTipoName(proceso.tipo)} {proceso.data.toFormat("d/M/y")}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

function extractTipoName(tipo: TipoProcesoElectoralId) {
    const t = TiposProcesoElectoral.get(tipo);
    return t?.nome ?? "Desconocido";
}
