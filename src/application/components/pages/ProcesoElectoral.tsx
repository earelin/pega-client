import {ProcesoElectoralDetails} from "../procesos-electorais/ProcesoElectoralDetails";
import {useParams} from "react-router-dom";

export function ProcesoElectoral() {
     const {id} = useParams<"id">() as unknown as {id: number};
     return <ProcesoElectoralDetails id={id}/>;
}
