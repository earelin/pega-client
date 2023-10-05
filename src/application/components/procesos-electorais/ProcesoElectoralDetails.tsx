import {
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";
import {DatosXeraisProcesoElectoral} from "../DatosXeraisProcesoElectoral";
import {Typography} from "@mui/material";
import React from "react";

export function ProcesoElectoralDetails(props: {id: number}) {
    const {data: procesoElectoral} = useProcesoElectoralStore(props.id);

    return (
        <>
            <Typography variant="h3" component="h1">
                {procesoElectoral?.tipo.nome}: {procesoElectoral?.data.toFormat("d/M/y")}
            </Typography>
            <Typography>
                {procesoElectoral?.ambito ? <p>Ámbito: {procesoElectoral?.ambito}</p> : null}
            </Typography>
            <DatosXeraisProcesoElectoral id={props.id} />
        </>
    );
}
