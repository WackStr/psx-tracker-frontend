export interface AuthResponse {
    token: string
}

export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function signUp(req: SignUpRequest): Promise<string> {
    console.log(`signing up ${req.email}...`)
    return Promise.resolve('')
}

export async function login(username: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })

    if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || `Login failed with status ${res.status}`)
    }

    return (await res.json()) as AuthResponse
}

export async function verifyToken(): Promise<void> {
    const token = localStorage.getItem('auth_token')
    const res = await fetch(`${baseUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Token invalid')
}