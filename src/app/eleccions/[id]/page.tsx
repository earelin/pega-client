import { Breadcrumbs, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/">Pega</Link>
                <Typography color="text.primary">
                    Eleccions {params.id}
                </Typography>
            </Breadcrumbs>

            <Typography variant="h3" component="h1">
                Eleccions {params.id}
            </Typography>
        </main>
    );
}
