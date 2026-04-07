/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { OrderSummary } from './OrderSummary';
export type OrderDetail = (OrderSummary & {
    items: Array<OrderItem>;
});

