import {useDatosXeraisStore} from "../../domain/DatosXerais";
import {Grid, Stack, Typography} from "@mui/material";
import {sum} from "../../commons/math";

export function DatosXeraisProcesoElectoral(props: { id: number }) {
    const {data: datosXerais} = useDatosXeraisStore(props.id);

    return (
        <Grid container spacing={2}>
            <Grid container xs={6}>
                <Stack>
                    <Typography>Censo INE: {(datosXerais?.censoIne)?.toLocaleString()}</Typography>
                    <Typography>Censo CERA: {(datosXerais?.censoCera)?.toLocaleString()}</Typography>
                    <Typography>Censo CERE: {(datosXerais?.censoCere)?.toLocaleString()}</Typography>
                    <Typography>
                        Censo Total:&nbsp;
                        {(sum(datosXerais?.censoIne, datosXerais?.censoCera, datosXerais?.censoCere))?.toLocaleString()}
                    </Typography>
                </Stack>
            </Grid>
            <Grid container xs={6}>
                <Stack>
                    <Typography>
                        Hora primeiro avance participación:
                        {datosXerais?.horaPrimerAvanceParticipacion?.toISOTime()}
                    </Typography>
                    <Typography>
                        Hora segundo avance participación:
                        {datosXerais?.horaSegundoAvanceParticipacion?.toISOTime()}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}