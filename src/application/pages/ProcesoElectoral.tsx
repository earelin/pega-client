import {ProcesoElectoralDetails} from "../components/procesos-electorais/ProcesoElectoralDetails";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import {ResutadosXerais} from "../components/resultados/ResutadosXerais";
import {ResultadosCandidaturas} from "../components/resultados/ResultadosCandidaturas";
import {Box, Tab, Tabs} from "@mui/material";
import {ResultadosEntidade} from "../components/resultados/ResultadosEntidade";
import {EntidadesAdministrativasForm} from "../components/EntidadesAdministrativasForm";
import {EntidadeAdministrativa} from "../../domain/EntidadeAdministrativa";

export function ProcesoElectoral() {
    const {id} = useParams<"id">() as unknown as { id: number };
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    const [entidade, setEntidade] = useState<EntidadeAdministrativa | undefined>(undefined);

    const handleTabChange = (e: React.SyntheticEvent, tabIndex: number) => {
        setCurrentTabIndex(tabIndex);
    };

    return <>
         <Box sx={{marginBottom: 2, marginTop: 1}}>
             <ProcesoElectoralDetails id={id}/>
             <Tabs value={currentTabIndex} onChange={handleTabChange}>
                  <Tab label="Resultados Xerais"/>
                  <Tab label="Niveis administrativos"/>
                  <Tab label="Buscar"/>
             </Tabs>
         </Box>
        {currentTabIndex === 0 && (
            <Box>
                <ResutadosXerais id={id}/>
                <ResultadosCandidaturas id={id}/>
            </Box>
        )}
        {currentTabIndex === 1 && (
            <Box>
                <EntidadesAdministrativasForm setEntidate={setEntidade} />
                <ResultadosEntidade entidade={entidade}/>
            </Box>
        )}
    </>;
}
