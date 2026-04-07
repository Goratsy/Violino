/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from './OrderStatus';
export type OrderSummary = {
    orderId: number;
    status: OrderStatus;
    totalPrice: number;
    deliveryAddress: string | null;
    deliveryDate: string | null;
    comment: string | null;
    createdAt: string;
    updatedAt: string;
    user: {
        userId: number;
        fullName: string | null;
        phone: string;
    };
    assignedStaff: {
        staffId: number;
        fullName: string;
        role: OrderSummary.role;
    } | null;
};
export namespace OrderSummary {
    export enum role {
        ADMIN = 'admin',
        MANAGER = 'manager',
        COURIER = 'courier',
    }
}

