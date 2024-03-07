'use client';
import useSWR from 'swr';
import { BasicEntity } from '@/domain/BasicEntity';

export function useAxentesList() {
    const { data, error, isLoading } = useSWR(
        '/api/axentes',
        async (url) =>
            await fetch(url).then(
                (res) => res.json() as Promise<BasicEntity[]>,
            ),
    );

    return {
        axentes: data,
        isLoading: isLoading,
        isError: error,
    };
}
