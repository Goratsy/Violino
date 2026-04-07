import { ApiError, AuthService, OrdersService, type AuthLoginRequest, type AuthLoginResponse } from '@/shared/api/generated';
import '@/shared/api/openapi-client';

import { clearSession, getStoredSession, persistSession } from '../lib/session';

export const loginAsStaff = async (payload: AuthLoginRequest): Promise<AuthLoginResponse> => {
  const response = await AuthService.postApiAuthLogin({
    requestBody: payload,
  });

  persistSession({
    token: response.token,
    staff: response.staff,
  });

  return response;
};

export const verifyStaffSession = async (): Promise<boolean> => {
  const session = getStoredSession();

  if (!session) {
    return false;
  }

  try {
    await OrdersService.getApiOrders({ limit: 1, offset: 0 });
    return true;
  } catch (error) {
    if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
      clearSession();
      return false;
    }

    throw error;
  }
};
