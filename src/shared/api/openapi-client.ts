import { env } from '@/shared/config/env';
import { getAccessToken } from '@/features/auth/lib/session';

import { OpenAPI } from './generated';

OpenAPI.BASE = env.serverUrl;
OpenAPI.TOKEN = async () => getAccessToken() ?? '';

export { OpenAPI };
