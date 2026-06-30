import PocketBase from 'pocketbase';

// CONFIGURAR: defina VITE_PB_URL no seu .env
export const pb = new PocketBase(
  import.meta.env.VITE_PB_URL || 'https://SEU_POCKETBASE_URL'
);
