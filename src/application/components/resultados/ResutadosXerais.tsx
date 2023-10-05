import {Grid, Stack, Typography} from "@mui/material";
import {useResultadosElectoraisStore} from "../../../domain/ResultadosElectorais";

export function ResutadosXerais(props: { id: number }) {
    const {data: resultado} = useResultadosElectoraisStore(props.id);

    return (
        <Stack>
            <Typography>Votos brancos: {(resultado?.votosBranco)?.toLocaleString()}</Typography>
            <Typography>Votos nulus: {(resultado?.votosNulos)?.toLocaleString()}</Typography>
            <Typography>Votos candidaturas: {(resultado?.votosCandidaturas)?.toLocaleString()}</Typography>
            <Typography>
                Votantes primeiro avance participación:
                {(resultado?.votantesPrimeiroAvanceParticipacion)?.toLocaleString()}
            </Typography>
            <Typography>
                Votantes segundo avance participación:
                {(resultado?.votantesSegundoAvanceParticipacion)?.toLocaleString()}
            </Typography>
        </Stack>

    );
}
