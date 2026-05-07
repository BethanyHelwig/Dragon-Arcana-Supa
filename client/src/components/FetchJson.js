const API_URL = import.meta.env.VITE_CLIENT_URL

export default async function FetchJson(endpoint) {
    const response = await fetch(`${API_URL}${endpoint}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`)
    }

    return response.json()
}