import { http, HttpResponse, delay } from 'msw'
import { mockAuthResponse, mockSignUpResponse } from './data/auth'
import { mockIndexData } from './data/indexes'

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export const handlers = [
    // Auth: Login
    http.post(`${baseUrl}/auth/login`, async () => {
        await delay(200)
        return HttpResponse.json(mockAuthResponse)
    }),

    // Auth: Verify token
    http.post(`${baseUrl}/auth/verify`, async ({ request }) => {
        await delay(100)
        const authHeader = request.headers.get('Authorization')
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return new HttpResponse(null, { status: 401 })
        }
        
        return new HttpResponse(null, { status: 200 })
    }),

    // Users: Sign up
    http.post(`${baseUrl}/users/create`, async ({ request }) => {
        await delay(300)
        const body = await request.json() as Record<string, string>
        
        return HttpResponse.json({
            ...mockSignUpResponse,
            email: body.email || mockSignUpResponse.email,
            first_name: body.first_name || mockSignUpResponse.first_name,
            last_name: body.last_name || mockSignUpResponse.last_name
        })
    }),

    // Share: Get share price data
    http.get(`${baseUrl}/share/share-price/:script`, async () => {
        await delay(250)
        return HttpResponse.json(mockIndexData)
    })
]
