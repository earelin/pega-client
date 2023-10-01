import {ProcesoElectoralDetails} from "../components/procesos-electorais/ProcesoElectoralDetails";
import {Link as RouterLink, useParams} from "react-router-dom";
import React from "react";
import {Breadcrumbs, Link} from "@mui/material";

export function ProcesoElectoral() {
     const {id} = useParams<"id">() as unknown as {id: number};
     return <>
          <Breadcrumbs aria-label="breadcrumb">
               <Link component={RouterLink} to="/">Home</Link>
          </Breadcrumbs>
          <ProcesoElectoralDetails id={id}/>
     </>;
}
