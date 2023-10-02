import {
    useProcesoElectoralStore
} from "../../../domain/ProcesoElectoral";
import {DatosXeraisProcesoElectoral} from "../DatosXeraisProcesoElectoral";
import {ResutadosXerais} from "../ResutadosXerais";
import {Stack, Typography} from "@mui/material";
import React from "react";
import {ResultadosCandidaturas} from "../ResultadosCandidaturas";

export function ProcesoElectoralDetails(props: {id: number}) {
    const {data: procesoElectoral} = useProcesoElectoralStore(props.id);

    return (
        <Stack spacing={1}>
            <Typography variant="h3" component="h1">
                {procesoElectoral?.tipo.nome}: {procesoElectoral?.data.toFormat("d/M/y")}
            </Typography>
            <Typography>
                {procesoElectoral?.ambito ? <p>Ámbito: {procesoElectoral?.ambito}</p> : null}
            </Typography>
            <DatosXeraisProcesoElectoral id={props.id} />
            <Typography variant="h4" component="h2">Resultados</Typography>
            <ResutadosXerais id={props.id} />
            <ResultadosCandidaturas id={props.id} />
        </Stack>
    );
}
