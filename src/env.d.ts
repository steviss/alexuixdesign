/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly FONTAWESOME_NPM_AUTH_TOKEN: string
  readonly SANITY_STUDIO_PROJECT_ID: string
  readonly SANITY_STUDIO_DATASET: string
  readonly SANITY_PORT: string
  readonly SANITY_AUTH_TOKEN: string
  readonly ASTRO_WEBSITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
