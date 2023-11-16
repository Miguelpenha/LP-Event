declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATOCMS_URL: string
        DATOCMS_API_TOKEN: string
        NEXT_PUBLIC_DOMAIN: string
      }
    }
}

export {}