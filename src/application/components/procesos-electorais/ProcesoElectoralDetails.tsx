import {
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";

export function ProcesoElectoralDetails(props: {id: number}) {
    const {data: procesoElectoral} = useProcesoElectoralStore(props.id);

    return (
        <>
            <h1>{procesoElectoral?.tipo.nome}: {procesoElectoral?.data.toFormat("d/M/y")}</h1>
            {procesoElectoral?.ambito ? <p>Ámbito: {procesoElectoral?.ambito}</p> : null}
        </>
    );
}
