import {Grid, Stack, Typography} from "@mui/material";
import {sum} from "../../commons/math";
import {useResultadosElectoraisStore} from "../../domain/ResultadosElectorais";

export function ResutadosXerais(props: { id: number }) {
    const {data: resultado} = useResultadosElectoraisStore(props.id);

    return (
        <Grid container spacing={2}>
            <Grid container xs={6}>
                <Stack>
                    <Typography>Votos brancos: {(resultado?.votosBranco)?.toLocaleString()}</Typography>
                    <Typography>Votos nulus: {(resultado?.votosNulos)?.toLocaleString()}</Typography>
                    <Typography>Votos candidaturas: {(resultado?.votosCandidaturas)?.toLocaleString()}</Typography>
                </Stack>
            </Grid>
            <Grid container xs={6}>
                <Stack>
                    <Typography>
                        Votantes primeiro avance participación:
                        {(resultado?.votantesPrimeiroAvanceParticipacion)?.toLocaleString()}
                    </Typography>
                    <Typography>
                        Votantes segundo avance participación:
                        {(resultado?.votantesSegundoAvanceParticipacion)?.toLocaleString()}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}
