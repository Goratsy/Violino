import {
  PublicService,
  type CreatePublicOrderRequest,
  type GroupedCatalog,
  type OrderDetail,
} from '@/shared/api/generated';
import '@/shared/api/openapi-client';

export const getPublicCatalog = async (): Promise<GroupedCatalog> => {
  return PublicService.getApiPublicCatalog();
};

export const createPublicOrder = async (
  payload: CreatePublicOrderRequest,
): Promise<OrderDetail> => {
  return PublicService.postApiPublicOrders({
    requestBody: payload,
  });
};
