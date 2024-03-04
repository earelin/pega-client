import { Container, Box, Typography } from '@mui/material';
import EleccionsSelectorForm from '@/components/eleccions/EleccionsSelector';

export default function Home() {
    return (
        <main>
            <Container maxWidth="lg">
                <Title />
                <EleccionsSelector />
            </Container>
        </main>
    );
}

function Title() {
    return (
        <Box sx={{ marginBottom: '3rem' }}>
            <Typography variant="h2" component="h1">
                Pega
            </Typography>
            <Typography variant="body1">Estatísticas electoráis</Typography>
        </Box>
    );
}

function EleccionsSelector() {
    return (
        <Box sx={{ marginBottom: '3rem' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Eleccións
            </Typography>
            <EleccionsSelectorForm />
        </Box>
    );
}
