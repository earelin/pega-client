import {
    TipoProcesoElectoralId,
    TiposProcesoElectoral,
    useProcesosElectoraisStore
} from "../../../domain/ProcesoElectoral";
import {Link} from "react-router-dom";

export function ProcesosElectoraisLista() {
    const [procesos] = useProcesosElectoraisStore();

    return (
        <>
            <h1>Resultados de Procesos Electorais</h1>
            <ul>
                {procesos.map((proceso, index) => (
                    <li key={index}><Link to={`proceso-electoral/${proceso.id}`}>{extractTipoName(proceso.tipo)} {proceso.data.toLocaleString()}</Link></li>
                ))}
            </ul>
        </>
    );
}

function extractTipoName(tipo: TipoProcesoElectoralId) {
    const t = TiposProcesoElectoral.get(tipo);
    return t?.nome ?? "Desconocido";
}
