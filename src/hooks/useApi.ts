import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

const SERVER_URL = 'http://localhost:3000';

export function useApi<T>(url: string, options?: RequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);

        try {
            const response: AxiosResponse<T> = await axios(SERVER_URL + url, options);
            setData(response.data);
        } catch (error) {
            setError(error as Error);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { data, isLoading, error };
}

export type RequestConfig = {

}
