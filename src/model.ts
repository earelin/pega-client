export interface ProcesoElectoralDao {
    id: number;
    nome: string;
    data: string;
}

export interface ProcesoElectoral {
    id: number;
    nome: string;
    data: Date;
}
