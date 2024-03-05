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
import { Dispatch, SetStateAction, useState } from 'react';
import { useEleccionsList } from '@/domain/eleccions/eleccions';

export interface EleccionsSelectorFormState {
    tipo: number;
    ambito: number;
}

export default function EleccionsSelector() {
    const [selectedElections, setSelectedElections] =
        useState<EleccionsSelectorFormState>({
            tipo: 0,
            ambito: 0,
        });

    return (
        <>
            <EleccionsSelectorForm
                selectedElections={selectedElections}
                setSelectedElections={setSelectedElections}
            />
            <EleccionsSelectorList selected={selectedElections} />
        </>
    );
}

function EleccionsSelectorList(props: {
    readonly selected: EleccionsSelectorFormState;
}) {
    const { eleccions, isLoading, isError } = useEleccionsList(props.selected);
    return <div>{JSON.stringify([eleccions, isLoading, isError])}</div>;
}

function EleccionsSelectorForm(props: {
    readonly selectedElections: EleccionsSelectorFormState;
    readonly setSelectedElections: Dispatch<
        SetStateAction<EleccionsSelectorFormState>
    >;
}) {
    const handleChange = (event: SelectChangeEvent<number>) => {
        const { name, value } = event.target;
        props.setSelectedElections((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Grid container columnSpacing={1}>
            <Grid item xs={12} md={6}>
                <TipoSelector onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                {props.selectedElections.tipo === 3 && (
                    <ComunidadeAutonomaSelector onChange={handleChange} />
                )}
            </Grid>
            <div>Form Data: {JSON.stringify(props.selectedElections)}</div>
        </Grid>
    );
}

function TipoSelector(props: {
    readonly onChange: (event: SelectChangeEvent<number>) => void;
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
                data-testid="tipo-selector"
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
    readonly onChange: (event: SelectChangeEvent<number>) => void;
}) {
    return (
        <FormControl fullWidth={true}>
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
