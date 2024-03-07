import { Container, Box, Typography, Grid } from '@mui/material';
import EleccionsSelectorForm from '@/components/eleccions/EleccionsSelector';
import AxentesSelector from '@/components/axentes/AxentesSelector';

export default function Home() {
    return (
        <main>
            <Box sx={{ marginBottom: '3rem' }}>
                <Title />
            </Box>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <EleccionsSelectorForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <AxentesSelector />
                </Grid>
            </Grid>
        </main>
    );
}

function Title() {
    return (
        <>
            <Typography variant="h2" component="h1">
                Pega
            </Typography>
            <Typography variant="body1">Estatísticas electoráis</Typography>
        </>
    );
}
