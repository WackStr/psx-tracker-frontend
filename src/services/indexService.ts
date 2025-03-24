export interface IndexData{
    company_script: string
    measured_on: string
    price: number
}

const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function fetchIndexData(): Promise<IndexData[]> {
    const url = `${baseUrl}/share-price/abc`

    const response = await fetch(url)

    if(!response.ok){
        throw new Error(`Failed to fectch Data...`)
    }

    const data: IndexData[] = await response.json()
    return data
}