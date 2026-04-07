/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItemInput } from './OrderItemInput';
export type UpdateOrderRequest = {
    assignedStaffId?: number | null;
    deliveryAddress?: string | null;
    deliveryDate?: string | null;
    comment?: string | null;
    items?: Array<OrderItemInput>;
};

