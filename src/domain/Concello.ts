export interface EntidadeAdministrativa {
    id: number;
    nome: string;
    nivel: NivelAdministrivo;
}

export enum NivelAdministrivo {
    COMUNIDADE_AUTONOMA = 'COMUNIDADE_AUTONOMA',
    PROVINCIA = 'PROVINCIA',
    CONCELLO = 'CONCELLO',
    DISTRITO = 'DISTRITO',
    SECCION = 'SECCION',
}
