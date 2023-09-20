import {Link} from "react-router-dom";
import {
    TipoProcesoElectoralId,
    TiposProcesoElectoral,
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";

export function ProcesoElectoralDetails(props: {id: number}) {
    const {data} = useProcesoElectoralStore(props.id);

    return (
        <>
            <p><Link to="/">Home</Link></p>
            <h1>Proceso Electoral</h1>
            <p>Data: {data?.data.toFormat("d/M/y")}</p>
            <p>Tipo: {extractTipoName(data?.tipo)}</p>
            {data?.tipo === "AUTONOMICAS" && <p>Ámbito: {data?.ambito}</p>}
        </>
    );
}

function extractTipoName(tipoId: TipoProcesoElectoralId | undefined) {
    if (tipoId === null) {
        return null;
    }

    const tipo = TiposProcesoElectoral.get(tipoId!);
    return tipo?.nome;
}
