import {
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";

export function ProcesoElectoralDetails(props: {id: number}) {
    const {data} = useProcesoElectoralStore(props.id);

    return (
        <>
            <h1>{data?.tipo.nome}: {data?.data.toFormat("d/M/y")}</h1>
            {data?.tipo.id === 7 && <p>Ámbito: {data?.ambito}</p>}
        </>
    );
}
