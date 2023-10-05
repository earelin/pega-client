import {ProcesoElectoralDetails} from "../components/procesos-electorais/ProcesoElectoralDetails";
import {useParams} from "react-router-dom";
import React from "react";
import {ResutadosXerais} from "../components/resultados/ResutadosXerais";
import {ResultadosCandidaturas} from "../components/resultados/ResultadosCandidaturas";

export function ProcesoElectoral() {
     const {id} = useParams<"id">() as unknown as {id: number};
     return <>
          <ProcesoElectoralDetails id={id}/>
          <ResutadosXerais id={id} />
          <ResultadosCandidaturas id={id} />
     </>;
}
