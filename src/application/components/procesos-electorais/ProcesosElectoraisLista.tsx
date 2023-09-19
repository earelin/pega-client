import {
    ProcesoElectoral,
    TipoProcesoElectoralId,
    TiposProcesoElectoral,
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";

export function ProcesosElectoraisLista() {
    const [procesos] = useProcesoElectoralStore();

    return (
        <>
            <h1>Resultados de Procesos Electorais</h1>
            <ul>
                {procesos.map((proceso, index) => (
                    <li key={index}>{extractTipoName(proceso.tipo)} {proceso.data.toLocaleString()}</li>
                ))}
            </ul>
        </>
    );
}

function extractTipoName(tipo: TipoProcesoElectoralId) {
    const t = TiposProcesoElectoral.get(tipo);
    return t?.nome ?? "Desconocido";
}
