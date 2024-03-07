'use client';
import { Grid, Typography } from '@mui/material';
import { useAxentesList } from '@/domain/axente';

export default function AxentesSelector() {
    const { axentes } = useAxentesList();

    return (
        <Grid container>
            {axentes &&
                axentes.map((axente) => (
                    <Grid item xs={3} key={axente.id}>
                        {axente.nome}
                    </Grid>
                ))}
        </Grid>
    );
}
