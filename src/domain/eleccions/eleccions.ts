import useSWR from 'swr';

interface EleccionsFilter {
    tipo: number;
    ambito: number;
}

export function useEleccionsList(filter: EleccionsFilter) {
    const eleccionsFetcher = async (url: string, f: EleccionsFilter) => {
        const params = new URLSearchParams();
        if (f.tipo !== 0) {
            params.append('tipo', f.tipo.toString());
        }
        if (f.ambito !== 0) {
            params.append('ambito', f.ambito.toString());
        }

        const requestUrl = params.size === 0 ? url : `${url}?${params}`;
        const response = await fetch(requestUrl);
        return response.json();
    };

    const { data, error, isLoading } = useSWR(
        ['/api/eleccions', filter],
        async ([url, filter]) => await eleccionsFetcher(url, filter),
    );

    return {
        eleccions: data,
        isLoading: isLoading,
        isError: error,
    };
}
