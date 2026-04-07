/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItemInput } from './OrderItemInput';
export type CreatePublicOrderRequest = {
    phone: string;
    fullName?: string;
    email?: string;
    address?: string;
    additionalInfo?: string;
    deliveryAddress?: string;
    deliveryDate?: string;
    comment?: string;
    items: Array<OrderItemInput>;
};

