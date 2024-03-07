'use client';
import { Grid, Typography } from '@mui/material';
import { useAxentesList } from '@/domain/axente';
import Link from '@mui/material/Link';

export default function AxentesSelector() {
    const { axentes } = useAxentesList();

    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
            {axentes &&
                axentes.map((axente) => (
                    <Grid item xs={1} key={axente.id}>
                        <Link href={`/axentes/${axente.id}`}>
                            <img
                                width="100%"
                                src={`/axentes/${axente.logo}`}
                                alt={axente.nome}
                            />
                        </Link>
                    </Grid>
                ))}
        </Grid>
    );
}
