'use client';
import useSWR from 'swr';
import { BasicEntity } from '@/domain/BasicEntity';

export interface Axente extends BasicEntity {
    logo: string;
}

export function useAxentesList() {
    const { data, error, isLoading } = useSWR(
        '/api/axentes',
        async (url) =>
            await fetch(url).then((res) => res.json() as Promise<Axente[]>),
    );

    return {
        axentes: data,
        isLoading: isLoading,
        isError: error,
    };
}

export function useAxente(id: string) {
    const { data, error, isLoading } = useSWR(
        `/api/axentes/${id}`,
        async (url) =>
            await fetch(url).then((res) => res.json() as Promise<Axente>),
    );

    return {
        axente: data,
        isLoading: isLoading,
        isError: error,
    };
}
