import type { AuthResponse, SignUpResponse } from '@/services/authService'

export const mockAuthResponse: AuthResponse = {
    access_token: 'mock-jwt-token-abc123xyz',
    refresh_token: 'mock-refresh-token-def456',
    token_type: 'bearer'
}

export const mockSignUpResponse: SignUpResponse = {
    id: 1,
    email: 'test@example.com',
    first_name: 'Test',
    last_name: 'User',
    created_on: new Date().toISOString()
}
