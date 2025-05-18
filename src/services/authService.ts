export interface AuthResponse {
    access_token: string,
    refresh_token: string,
    token_type: string
}

export interface SignUpResponse {
    email: string,
    first_name: string,
    last_name: string,
    id: number,
    created_on: string
}

export interface SignUpRequest {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function signUp(req: SignUpRequest): Promise<SignUpResponse> {

    const res = await fetch(`${baseUrl}/users/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })

    const data = await res.json()
    
    if (!res.ok) {
        console.error('SignUp Error:', {
            status: res.status,
            statusText: res.statusText,
            response: data
        })
        throw new Error(data.message || 'Failed to sign up')
    }
    
    return data as SignUpResponse
}

export async function login(username: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: username, password: password})
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || `Login failed with status ${res.status}`)
    }
    return data as AuthResponse;
}

export async function verifyToken(): Promise<void> {
    const token = localStorage.getItem('access_token')
    const res = await fetch(`${baseUrl}/auth/verify`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Token invalid')
}