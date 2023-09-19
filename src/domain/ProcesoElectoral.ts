import {useEffect, useState} from "react";
import {getProcesosElectorais} from "../infrastructure/pega/ProcesosElectoraisRepository";
import {DateTime} from "luxon";

export interface ProcesoElectoral {
    id: number;
    tipo: 'REFERENDUM' | 'XERAIS' | 'CONGRESO' | 'SENADO' | 'MUNICIPAIS' | 'AUTONOMICAS' | 'CABILDOS_INSULARES' | 'PARLAMENTO_EUROPEU' | 'PARTIDOS_XUDICIAIS_E_DIPUTACIONS_PROVINCIAIS';
    ambito: number;
    data: DateTime;
}

export type TipoProcesoElectoralId = 'REFERENDUM' | 'XERAIS' | 'CONGRESO' | 'SENADO' | 'MUNICIPAIS' | 'AUTONOMICAS' | 'CABILDOS_INSULARES' | 'PARLAMENTO_EUROPEU' | 'PARTIDOS_XUDICIAIS_E_DIPUTACIONS_PROVINCIAIS';

export interface TipoProcesoElectoral {
    id: TipoProcesoElectoralId;
    nome: string;
}

export const TiposProcesoElectoral: Map<TipoProcesoElectoralId, TipoProcesoElectoral> = new Map([
    ['REFERENDUM', {
        id: 'REFERENDUM',
        nome: 'Referendo'
    }],
    ['XERAIS', {
        id: 'XERAIS',
        nome: 'Xerais'
    }],
    ['CONGRESO', {
        id: 'CONGRESO',
        nome: 'Congreso'
    }],
    ['SENADO', {
        id: 'SENADO',
        nome: 'Senado'
    }],
    ['MUNICIPAIS', {
        id: 'MUNICIPAIS',
        nome: 'Municipais'
    }],
    ['AUTONOMICAS', {
        id: 'AUTONOMICAS',
        nome: 'Autonómicas'
    }],
    ['CABILDOS_INSULARES', {
        id: 'CABILDOS_INSULARES',
        nome: 'Cabildos Insulares'
    }],
    ['PARLAMENTO_EUROPEU', {
        id: 'PARLAMENTO_EUROPEU',
        nome: 'Parlamento Europeo'
    }],
    ['PARTIDOS_XUDICIAIS_E_DIPUTACIONS_PROVINCIAIS', {
        id: 'PARTIDOS_XUDICIAIS_E_DIPUTACIONS_PROVINCIAIS',
        nome: 'Partidos Xudiciais e Deputacións Provinciais'
    }]
]);

export function useProcesoElectoralStore() {
    const [procesos, setProcesos] = useState<ProcesoElectoral[]>([]);

    const fetchProcesos = async () => {
        const procesosList = await getProcesosElectorais();
        setProcesos(procesosList);
    }

    useEffect(() => {
        fetchProcesos()
            .catch(error => console.error(error));
    }, [])

    return [procesos];
}
