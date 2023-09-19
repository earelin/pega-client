export async function restClientGet<T>(url: string): Promise<T> {
    return fetch(url).then(response => response.json())
}
