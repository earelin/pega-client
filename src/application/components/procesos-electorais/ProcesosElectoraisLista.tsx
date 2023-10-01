import {
    useProcesosElectoraisStore
} from "../../../domain/ProcesoElectoral";
import {Link as RouterLink} from "react-router-dom";
import {Link, List, ListItem} from "@mui/material";

export function ProcesosElectoraisLista() {
    const {data} = useProcesosElectoraisStore();

    return (
        <>
            <h1>Procesos Electorais</h1>
            <List>
                {data?.map(proceso => (
                    <ListItem key={proceso.id}>
                        <Link component={RouterLink} to={`proceso-electoral/${proceso.id}`}>
                            {proceso.tipo.nome} {proceso.data.toFormat("d/M/y")}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
