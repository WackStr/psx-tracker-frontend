// src/env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    // Add other environment variables here...
    // e.g. readonly VITE_ANOTHER_VAR: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  