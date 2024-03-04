'use client';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { findAllTiposEleccions } from '@/domain/eleccions/tipo-eleccions';
import { findAllComunidadesAutonomas } from '@/domain/eleccions/division-administrativa';
import { useState } from 'react';

interface EleccionsSelectorFormState {
    tipo: number;
    ambito: number;
}

export default function EleccionsSelectorForm() {
    const [formData, setFormData] = useState<EleccionsSelectorFormState>({
        tipo: 0,
        ambito: 0,
    });

    const handleChange = (event: SelectChangeEvent<number>) => {
        console.log(event);
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <Grid container columnSpacing={1}>
            <Grid item xs={12} md={6}>
                <TipoSelector onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                {formData.tipo === 3 && (
                    <ComunidadeAutonomaSelector
                        disabled={formData.tipo !== 3}
                        onChange={handleChange}
                    />
                )}
            </Grid>
            <div>Form Data: {JSON.stringify(formData)}</div>
        </Grid>
    );
}

function TipoSelector(props: {
    onChange: (event: SelectChangeEvent<number>) => void;
}) {
    return (
        <FormControl fullWidth={true}>
            <InputLabel id="eleccions-selector-tipo-label">Tipo</InputLabel>
            <Select
                labelId="eleccions-selector-tipo-label"
                id="eleccions-selector-tipo"
                label="Tipo"
                name="tipo"
                onChange={props.onChange}
                defaultValue={0}
            >
                <MenuItem value="0">Todas</MenuItem>
                {findAllTiposEleccions().map((tipo) => (
                    <MenuItem key={tipo.id} value={tipo.id}>
                        {tipo.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

function ComunidadeAutonomaSelector(props: {
    disabled: boolean;
    onChange: (event: SelectChangeEvent<number>) => void;
}) {
    return (
        <FormControl fullWidth={true} disabled={props.disabled}>
            <InputLabel id="eleccions-selector-ambito-label">
                Comunidade Autónoma
            </InputLabel>
            <Select
                labelId="eleccions-selector-ambito-label"
                id="eleccions-selector-ambito"
                label="Comunidade Autónoma"
                name="ambito"
                onChange={props.onChange}
                defaultValue={0}
            >
                <MenuItem value="0">Todas</MenuItem>
                {findAllComunidadesAutonomas().map((comunidad) => (
                    <MenuItem key={comunidad.id} value={comunidad.id}>
                        {comunidad.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
