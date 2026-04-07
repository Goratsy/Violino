const DEFAULT_SERVER_URL = 'http://localhost:4000';

export const env = {
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || DEFAULT_SERVER_URL,
  yandexMapApiKey: process.env.NEXT_PUBLIC_YANDEX_MAP_API || '',
};
