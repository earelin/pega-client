import { Container, Box, Typography } from '@mui/material';
import EleccionsSelectorForm from '@/components/eleccions/EleccionsSelector';

export default function Home() {
    return (
        <main>
            <Box sx={{ marginBottom: '3rem' }}>
                <Title />
            </Box>
            <Box sx={{ marginBottom: '3rem' }}>
                <EleccionsSelectorForm />
            </Box>
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
