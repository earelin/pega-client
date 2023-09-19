import {useParams} from "react-router-dom";
import {useProcesoElectoralStore} from "../../domain/ProcesoElectoral";

export function ProcesoElectoral() {
    const {id} = useParams<"id">() as unknown as {id: number};
    const [proceso] = useProcesoElectoralStore(id);

    return (
        <>
            <h1>Proceso Electoral</h1>
            <p>Tipo: {proceso?.tipo}</p>
            <p>Id: {proceso?.id}</p>
        </>
    );
}
